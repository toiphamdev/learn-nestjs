import { IsNotEmpty } from 'class-validator';

export class CommentDto {
  @IsNotEmpty()
  content: string;
  image: string;
  parentId: number;
  productId: number;
  start: number;
  userId: number;
  blogId: number;
  createdAt: Date;
  updatedAt: Date;
}
