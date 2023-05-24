export class ProductDto {
  id: number;
  name: string;
  contentMarkdown: string;
  contentHtml: string;
  categoryId: string;
  statusId: string;
  view: number;
  madeBy: string;
  material: string;
  brandId: string;
  createdAt?: Date;
  updatedAt?: Date;
}
