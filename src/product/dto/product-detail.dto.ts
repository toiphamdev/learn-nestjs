export class ProductDetailDto {
  productId: number;
  name: string;
  originalPrice: number;
  discountPrice: number;
  image: string[];
  createdAt: Date;
  updatedAt: Date;
}
