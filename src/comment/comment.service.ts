import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { IsNull, Not, Repository } from 'typeorm';
import { CommentDto, CommentWithChildren } from './dto/comment.dto';
import { Product } from 'src/product/entities/product.entity';
import { QueryCommentDto } from './dto/query-comment.dto';
import * as fs from 'fs-extra';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}
  async createNewComment(comment: CommentDto): Promise<{
    message: string;
  }> {
    try {
      comment.createdAt = new Date();
      comment.updatedAt = new Date();
      const existRating = comment.star
        ? await this.commentRepository.findOne({
            where: {
              star: Not(IsNull()),
              userId: comment.userId,
              productId: comment.productId,
            },
          })
        : null;
      if (existRating) {
        existRating.star = comment.star;
        existRating.content = comment.content;
        existRating.updatedAt = new Date();
        const oldImages = existRating.images;
        const newImages = comment.images ? comment.images : [];
        const imagesToAdd = newImages.filter(
          (image) => !oldImages.includes(image),
        );
        const imagesToRemove = oldImages.filter(
          (image) => !newImages.includes(image),
        );
        for (const image of imagesToRemove) {
          const destinationPath = `./public/uploads/comments/${image}`;
          await fs.remove(destinationPath);
        }
        for (const image of imagesToAdd) {
          const tempPath = `./public/temp/${image}`;
          const destinationPath = `./public/uploads/comments/${image}`;
          await fs.move(tempPath, destinationPath);
        }
        await this.commentRepository.save(existRating);
      } else {
        const createdBlog = await this.commentRepository.save(comment);
        const images = comment.images ? comment.images : [];
        if (createdBlog) {
          for (const image of images) {
            const tempPath = `./public/temp/${image}`;
            const destinationPath = `./public/uploads/comments/${image}`;
            await fs.move(tempPath, destinationPath);
          }
        }
      }
      if (comment.star && comment.productId) {
        const comments = await this.commentRepository.find({
          where: {
            productId: comment.productId,
          },
        });
        let length = 0;
        const totalRating = comments.reduce((sum, comment) => {
          if (comment.star) {
            length = length + 1;
            return sum + comment.star;
          }
          return sum;
        }, 0);
        await this.productRepository.update(comment.productId, {
          rating: length > 0 ? totalRating / length : 0,
        });
      }
      return {
        message: 'success',
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Somethings went wrong');
    }
  }
  async getAllComment(query: QueryCommentDto): Promise<{
    data: CommentWithChildren[];
    meta: {
      current: number;
      size: number;
      totalItems: number;
    };
  }> {
    try {
      const ITEMS_PER_PAGE = query.size || 10;
      const currentPage = query.page || 1;
      const offset = (currentPage - 1) * ITEMS_PER_PAGE;

      const queryBuilder = this.commentRepository.createQueryBuilder('comment');

      // Xử lý các điều kiện tìm kiếm
      if (query.blogId) {
        queryBuilder.andWhere('comment.blogId = :blogId', {
          blogId: query.blogId,
        });
      }
      if (query.productId) {
        queryBuilder.andWhere('comment.productId = :productId', {
          productId: query.productId,
        });
      }
      if (query.star) {
        queryBuilder.andWhere('comment.star = :star', {
          star: query.star,
        });
      }

      // Xử lý việc sắp xếp
      Object.entries(query).forEach(([key, value]) => {
        if (key.startsWith('sort')) {
          const newKey = key.replace('sort', '');
          queryBuilder.orderBy(`comment.${newKey}`, value);
        }
      });

      const [comments, totalItems] = await queryBuilder
        .leftJoinAndSelect('comment.user', 'user')
        .leftJoinAndSelect('comment.likeList', 'likeList')
        .leftJoinAndSelect('comment.dislikeList', 'dislikeList')
        .select([
          'comment',
          'user.id',
          'user.firstName',
          'user.lastName',
          'user.image',
          'likeList.id',
          'dislikeList.id',
        ])
        .getManyAndCount();

      // Lấy danh sách comment cha
      let parentComments = comments.filter(
        (comment) => comment.parentId === null,
      );
      if (query.userId) {
        // Tạo bản sao của mảng parentComments để không ảnh hưởng đến mảng gốc
        const sortedParentComments = [...parentComments];

        // Sắp xếp danh sách comment cha dựa trên hàm so sánh
        // Sắp xếp dữ liệu theo yêu cầu
        const sortedData = sortedParentComments.sort((a, b) =>
          b.userId == query.userId ? 1 : a.userId == query.userId ? -1 : 0,
        );
        parentComments = sortedData;
      }
      // Lấy danh sách comment con
      const childComments = comments.filter(
        (comment) => comment.parentId !== null,
      );

      // Phân trang các comment cha
      const paginatedParentComments = parentComments.slice(
        offset,
        offset + ITEMS_PER_PAGE,
      );

      // Lấy tất cả comment con tương ứng của các comment cha trên trang hiện tại
      const paginatedChildComments = [];
      for (const parentComment of paginatedParentComments) {
        const children = childComments.filter(
          (comment) => comment.parentId === parentComment.id,
        );
        paginatedChildComments.push(...children);
      }

      // Kết hợp các comment cha và comment con lại thành CommentWithChildren
      const paginatedResult = paginatedParentComments.map((parentComment) => {
        const children = paginatedChildComments.filter(
          (comment) => comment.parentId === parentComment.id,
        );
        return { ...parentComment, children };
      });

      return {
        data: paginatedResult,
        meta: {
          current: currentPage,
          size: ITEMS_PER_PAGE,
          totalItems: parentComments.length,
        },
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Somethings went wrong');
    }
  }

  async deleteComment(id: number, userId: number) {
    let notPermision = false;
    try {
      const oldComment = await this.commentRepository.findOne({
        where: {
          id,
        },
      });
      if (userId !== oldComment.userId) {
        notPermision = true;
        throw new ForbiddenException('You are not author');
      } else {
        const commentToDelete = await this.commentRepository.findOne({
          where: { id },
        });
        const imagesToRemove = commentToDelete.images
          ? commentToDelete.images
          : [];
        for (const image of imagesToRemove) {
          const destinationPath = `./public/uploads/comments/${image}`;
          await fs.remove(destinationPath);
        }
        const deletedComment = await this.commentRepository.delete(id);
        if (deletedComment.affected > 0) {
          return {
            message: ' success',
          };
        }
      }
    } catch (error) {
      if (notPermision) {
        throw new ForbiddenException('You are not author');
      } else {
        console.log(error);
        throw new ForbiddenException('Somethings went wrong');
      }
    }
  }
}
