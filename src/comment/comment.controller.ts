import {
  Body,
  Controller,
  Post,
  Query,
  Req,
  UseGuards,
  Get,
  Param,
  Delete,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentDto, CommentWithChildren } from './dto/comment.dto';
import { JwtAuthGuard } from '../auth/guard';
import { Request } from 'express';
import { QueryCommentDto } from './dto/query-comment.dto';
import { Comment } from './entities/comment.entity';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}
  @Post()
  @UseGuards(new JwtAuthGuard('jwt'))
  createComment(@Body() comment: CommentDto, @Req() req: Request) {
    comment.userId = req.user['id'];
    return this.commentService.createNewComment(comment);
  }

  @Get()
  getAllComment(@Query() query: QueryCommentDto): Promise<{
    data: CommentWithChildren[];
    meta: {
      current: number;
      size: number;
      totalItems: number;
    };
  }> {
    return this.commentService.getAllComment(query);
  }
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  deleteComment(@Param() param: { id: number }, @Req() req: Request) {
    const user = req.user;
    return this.commentService.deleteComment(param.id, user['id']);
  }
}
