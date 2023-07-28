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

export interface CommentWithChildren {
  id: number;
  content: string;
  images: string[];
  parentId: number | null;
  star: number;
  createdAt: Date;
  updatedAt: Date;
  user: {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
  };
  likeList: {
    id: number;
  }[];
  dislikeList: {
    id: number;
  }[];
  children: CommentWithChildren[]; // Lồng comment con vào đây
}
