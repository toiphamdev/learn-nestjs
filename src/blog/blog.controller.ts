import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogDto } from './dto/blog.dto';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { Role } from 'src/user/entities/roles.enum';
import { JwtAuthGuard, RolesGuard } from 'src/auth/guard';
import { Request } from 'express';
import { SearchBlogDto } from './dto/searchBlog.dto';
import { Blog } from './entities/blog.entity';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  createBlog(
    @Body() blog: BlogDto,
    @Req() req: Request,
  ): Promise<{ message: string }> {
    const user = JSON.stringify(req.user);
    blog.userId = JSON.parse(user)?.id;
    return this.blogService.createBlog(blog);
  }

  @Get()
  searchBlogs(@Query() query: SearchBlogDto): Promise<{
    data: Blog[];
    meta: {
      current: number;
      size: number;
      totalItems: number | object;
    };
  }> {
    return this.blogService.searchBlogs(query);
  }

  @Put(':id')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  updateBlog(@Body() blog: BlogDto, @Param() param: { id: number }) {
    return this.blogService.updateBlog(blog, param.id);
  }

  @Get(':id')
  getBlogDetail(@Param() param: { id: number }): Promise<Blog> {
    return this.blogService.getBlogById(param.id);
  }
  @Delete(':id')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  deleteBlog(@Param() param: { id: number }): Promise<{ message: string }> {
    return this.blogService.deleteBlog(param.id);
  }
}
