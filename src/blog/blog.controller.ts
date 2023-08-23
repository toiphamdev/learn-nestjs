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
import {
  ApiBearerAuth,
  ApiBody,
  ApiForbiddenResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { ResponseCommonDto } from 'src/allcode/dto/allcode-api-response.dto';
import { BlogApiResponseDto } from './dto/blog-api-response.dto';

@ApiTags('blogs')
@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @ApiOperation({ summary: 'Create new Blog' })
  @ApiBearerAuth()
  @ApiBody({ type: BlogDto, description: 'blog information' })
  @ApiForbiddenResponse({ description: 'Somethings went wrong' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized!' })
  @ApiResponse({ status: 201, type: ResponseCommonDto })
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

  @ApiOperation({ summary: 'Search blog by query' })
  @ApiQuery({ type: SearchBlogDto })
  @ApiResponse({ status: 200, type: BlogApiResponseDto })
  @ApiForbiddenResponse()
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

  @ApiOperation({ summary: 'Updateblog' })
  @ApiBearerAuth()
  @ApiResponse({})
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
