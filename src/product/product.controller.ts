import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';
import { ProductDetailDto } from './dto/product-detail.dto';
import { ProductDetail } from './entity/product-detail.entity';
import { ProductImageDto } from './dto/product-image.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Post()
  createNewProduct(@Body() product: ProductDto): Promise<{
    message: string;
    product: ProductDto;
  }> {
    return this.productService.createProduct(product);
  }
  @Post('/detail')
  updateProductDetail(@Body() detail: ProductDetailDto): Promise<{
    message: string;
    productDetail: ProductDetail;
  }> {
    return this.productService.createProductDetail(detail);
  }
  @Get(':id')
  getProductById(@Param() param: { id: number }): Promise<{
    message: string;
    product: ProductDto;
  }> {
    return this.productService.getProductById(param.id);
  }
  @Post(':images')
  addedImage(@Body() images: ProductImageDto[]): Promise<{
    message: string;
  }> {
    return this.productService.addImageToProduct(images);
  }
  @Delete(':id')
  deleteProductById(
    @Param() param: { id: number },
  ): Promise<{ message: string }> {
    return this.productService.deleteProduct(param.id);
  }
}
