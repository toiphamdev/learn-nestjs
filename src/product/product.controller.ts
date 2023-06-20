import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';
import { ProductDetailDto } from './dto/product-detail.dto';
import { ProductDetail } from './entities/product-detail.entity';
import { JwtAuthGuard, RolesGuard } from 'src/auth/guard';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { Role } from 'src/user/entities/roles.enum';
import { SearchProductDto } from './dto/search-product.dto';
import { Product } from './entities/product.entity';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  //handle product
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  createNewProduct(@Body() product: ProductDto): Promise<{
    message: string;
    product: Product;
  }> {
    return this.productService.createProduct(product);
  }

  // @Roles(Role.ADMIN)
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Post(':images')
  // addedImage(@Body() images: ProductImageDto[]): Promise<{
  //   message: string;
  // }> {
  //   return this.productService.addImageToProduct(images);
  // }

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  deleteProductById(
    @Param() param: { id: number },
  ): Promise<{ message: string }> {
    return this.productService.deleteProduct(param.id);
  }

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Put(':id')
  updateProductById(
    @Body() product: ProductDto,
    @Param() param: { id: number },
  ): Promise<{ message: string }> {
    return this.productService.updateProduct(product, param.id);
  }
  //handle detail product
  @Post('/detail')
  createProductDetail(@Body() detail: ProductDetailDto): Promise<{
    message: string;
    productDetail: ProductDetail;
  }> {
    return this.productService.createProductDetail(detail);
  }

  @Get('/search')
  getProductByName(
    @Query()
    query: SearchProductDto,
  ) {
    return this.productService.searchProducts(query);
  }

  @Get()
  fillterProduct(@Query() query: SearchProductDto) {
    return this.productService.fillterProducts(query);
  }

  @Get(':id')
  getProductById(@Param() param: { id: number }): Promise<{
    message: string;
    product: ProductDto;
  }> {
    return this.productService.getProductById(param.id);
  }

  @Put('/detail/:id')
  updateProductDetail(
    @Body() detail: ProductDetail,
    @Param() param: { id: number },
  ) {
    return this.productService.updateProductDetail(param.id, detail);
  }
}
