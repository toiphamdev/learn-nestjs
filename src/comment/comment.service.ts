import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';
import { CommentDto } from './dto/comment.dto';
import { Product } from 'src/product/entities/product.entity';
import { QueryCommentDto } from './dto/query-comment.dto';

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
      const addedComment = await this.commentRepository.save(comment);
      if (addedComment) {
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
      } else {
        throw new ForbiddenException('Somethings went wrong');
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Somethings went wrong');
    }
  }
  async getAllComment(query: QueryCommentDto): Promise<{
    data: Comment[];
    meta: {
      current: number;
      size: number;
      totalItems: number;
    };
  }> {
    try {
      const queryBuilder = this.commentRepository.createQueryBuilder('comment');
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
      if (!query.page || !query.size) {
        query.page = 1;
        query.size = 10;
      }
      const comments = await queryBuilder
        .leftJoinAndSelect('comment.user', 'user')
        .select('comment', 'user')
        .getManyAndCount();
      return {
        data: comments[0],
        meta: {
          current: query.page,
          size: query.size,
          totalItems: comments[1],
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
      if (userId !== (await oldComment.userId)) {
        notPermision = true;
        throw new ForbiddenException('You are not author');
      } else {
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
