export interface SearchBlogDto {
  page?: number;
  size?: number;
  name?: string;
  statusId?: string;
  subjectId?: string;
  notDel?: boolean;
}
