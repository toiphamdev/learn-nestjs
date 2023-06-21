import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './entities/blog.entity';
import { SearchService } from '../search/search.service';
import { BlogDto } from './dto/blog.dto';
import { removeDiacritics } from 'src/utils/string.utils';
import slugify from 'slugify';
import { SearchBlogDto } from './dto/searchBlog.dto';
import * as fs from 'fs-extra';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>,
    private readonly searchService: SearchService,
  ) {}

  async createBlog(blog: BlogDto): Promise<{ message: string }> {
    try {
      blog.createdAt = new Date();
      blog.updatedAt = new Date();
      const createdBlog = await this.blogRepository.save(blog);
      const images = blog.images ? blog.images : [];
      if (createdBlog) {
        for (const image of images) {
          const tempPath = `./public/temp/${image}`;
          const destinationPath = `./public/uploads/blogs/${image}`;
          await fs.move(tempPath, destinationPath);
        }
        await this.searchService.indexBlog(createdBlog);
      }
      return {
        message: 'succeess',
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Somethings went wrong!');
    }
  }

  async updateBlog(blog: BlogDto, id: number): Promise<{ message: string }> {
    try {
      const newImages = blog.images ? blog.images : [];
      blog.updatedAt = new Date();
      const oldBlog = await this.blogRepository.findOne({
        where: {
          id,
        },
      });
      const oldImages = oldBlog.images ? oldBlog.images : [];
      const imagesToAdd = newImages.filter(
        (image) => !oldImages.includes(image),
      );
      const imagesToRemove = oldImages.filter(
        (image) => !newImages.includes(image),
      );
      for (const image of imagesToRemove) {
        const destinationPath = `./public/uploads/blogs/${image}`;
        await fs.remove(destinationPath);
      }
      for (const image of imagesToAdd) {
        const tempPath = `./public/temp/${image}`;
        const destinationPath = `./public/uploads/blogs/${image}`;
        await fs.move(tempPath, destinationPath);
      }
      const updateBlog = await this.blogRepository.update(id, { ...blog });
      if (updateBlog.affected > 0) {
        const updatedBlog = await this.blogRepository.findOne({
          where: { id },
        });
        this.searchService.updateBlog(updatedBlog);
      }
      return {
        message: 'success',
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Somethings went wrong!');
    }
  }

  searchBlogs = async (
    query: SearchBlogDto,
  ): Promise<{
    data: Blog[];
    meta: {
      current: number;
      size: number;
      totalItems: number | object;
    };
  }> => {
    try {
      if (!query.page && !query.size) {
        query.page = 1;
        query.size = 2;
      }
      if (query.name) {
        const options = {
          lower: true, // Convert the slug to lowercase
          remove: /[*+~.()'"!:@]/g, // Remove special characters
          replacement: ' ', // Replace spaces with hyphens
        };
        const q = slugify(removeDiacritics(query.name.toLowerCase()), options);
        query.name = q;
      }
      const filler = [];
      if (query.statusId) {
        filler.push({ term: { statusId: query.statusId } });
      }
      const must = query.name
        ? [
            {
              multi_match: {
                query: query.name,
                fields: ['title', 'shortDescription'],
                type: 'phrase_prefix',
              },
            },
          ]
        : [];
      const response = await this.searchService.searchBlogs({
        from: (query.page - 1) * query.size, // Vị trí bắt đầu của trang
        size: query.size, // Số lượng kết quả trả về cho mỗi trang
        query: {
          bool: {
            must: must,
            filter: [...filler],
          },
        },
      });
      const blogIds = response.hits.hits.map((item) => {
        const blog = item._source as Blog;
        return blog.id;
      });
      const totalHits = response.hits.total.valueOf();
      const blogs = await this.blogRepository
        .createQueryBuilder('blog')
        .leftJoinAndSelect('blog.comments', 'comments')
        .andWhereInIds(blogIds)
        .getMany();

      return {
        data: blogs,
        meta: {
          current: query.page,
          size: query.size,
          totalItems: totalHits,
        },
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Somethings went wrong!');
    }
  };

  getBlogById = async (id: number): Promise<Blog> => {
    try {
      const blog = await this.blogRepository
        .createQueryBuilder('blog')
        .leftJoinAndSelect('blog.status', 'status')
        .leftJoinAndSelect('blog.subject', 'subject')
        .where('blog.id = :id', { id })
        .select([
          'blog',
          'status.code',
          'status.value',
          'subject.code',
          'subject.value',
        ])
        .getOne();
      return blog;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Somethings went wrong!');
    }
  };

  deleteBlog = async (id: number): Promise<{ message: string }> => {
    try {
      const deletedBlog = this.blogRepository.delete(id);
      if ((await deletedBlog).affected > 0) {
        this.searchService.removeBlog(id);
        return {
          message: 'success',
        };
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Somethings went wrong!');
    }
  };
}
