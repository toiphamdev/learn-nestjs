export class BlogDto {
  title: string;
  shortDescription: string;
  subjectId: string;
  statusId: string;
  images: string[];
  contentMarkdown: string;
  createdAt?: Date;
  updatedAt?: Date;
}
