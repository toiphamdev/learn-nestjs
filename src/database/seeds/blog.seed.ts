import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SearchService } from 'src/search/search.service';
import { Blog } from 'src/blog/entities/blog.entity';

@Injectable()
export class BlogSeed {
  constructor(
    @InjectRepository(Blog)
    private blogRepository: Repository<Blog>,
    private searchService: SearchService,
  ) {}

  async seed(): Promise<void> {
    const existingBlogs = await this.blogRepository.count();

    if (existingBlogs === 0) {
      const products = [
        {
          title: 'Áo Polo Nữ Cafe Phối Bo Kiểm Soát Mùi Chống Tia UV',
          subjectId: 'xu huong thoi trang',
          contentHtml: '<p>hh</p>',
          contentMarkdown: 'hh',
          statusId: 'ACTIVE',
          view: 0,
          images: ['hh.jpg', 'qq.jpg'],
          shortDescription: '',
          createdAt: new Date(),
        },
      ];
      await this.blogRepository.save(products);
      const blogs = await this.blogRepository.find();
      for (const blog of blogs) {
        await this.searchService.indexBlog(blog);
      }
      console.log('Seed data products created successfully.');
    } else {
      console.log('Seed data products already exists.');
    }
  }
}
