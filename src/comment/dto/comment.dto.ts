import { IsNotEmpty } from 'class-validator';

export class CommentDto {
  @IsNotEmpty()
  content: string;
  images: string[];
  parentId: number;
  productId: number;
  star: number;
  userId: number;
  blogId: number;
  createdAt: Date;
  updatedAt: Date;
}
