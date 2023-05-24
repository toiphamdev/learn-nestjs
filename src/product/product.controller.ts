import { Body, Controller, Post } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';
import { ProductDetailDto } from './dto/product-detail.dto';
import { ProductDetail } from './entity/product-detail.entity';

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
}
