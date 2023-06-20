import { IsNotEmpty } from 'class-validator';

export class BlogDto {
  @IsNotEmpty()
  title: string;
  shortDescription?: string;
  subjectId?: string;
  statusId?: string;
  images?: string[];
  contentMarkdown?: string;
  userId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
