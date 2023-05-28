import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entity/comment.entity';
import { Repository } from 'typeorm';
import { CommentDto } from './dto/comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}
  async createNewComment(comment: CommentDto): Promise<{
    message: string;
  }> {
    try {
      console.log(comment);
      const addedComment = await this.commentRepository.save(comment);
      if (addedComment) {
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
}
