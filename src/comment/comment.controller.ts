import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentDto } from './dto/comment.dto';
import { JwtAuthGuard, RolesGuard } from '../auth/guard';
import { Request } from 'express';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}
  @UseGuards(new JwtAuthGuard('jwt'))
  @Post()
  createComment(@Body() comment: CommentDto, @Req() req: Request) {
    comment.userId = req.user['id'];
    return this.commentService.createNewComment(comment);
  }
}
