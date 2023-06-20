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
import { ProductDetailSizeDto } from './dto/product-detail-size.dto';

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
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
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
  ): Promise<{
    data: Product[];
    meta: {
      current: number;
      size: number;
      totalItems: number | object;
    };
  }> {
    return this.productService.searchProducts(query);
  }

  @Get()
  fillterProduct(@Query() query: SearchProductDto): Promise<{
    data: Product[];
    meta: {
      current: number;
      size: number;
      totalItems: number;
    };
  }> {
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
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  updateProductDetail(
    @Body() detail: ProductDetail,
    @Param() param: { id: number },
  ) {
    return this.productService.updateProductDetail(param.id, detail);
  }

  @Delete('/detail/:id')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  deleteProdDetail(
    @Param() param: { id: number },
  ): Promise<{ message: string }> {
    return this.productService.deleteProductDetail(param.id);
  }

  @Get('/detail/:productId')
  getAllProductDetail(
    @Param() param: { productId: number },
  ): Promise<ProductDetail[]> {
    return this.productService.getDetailByProductId(param.productId);
  }

  @Post('/size')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  createSize(@Body() size: ProductDetailSizeDto): Promise<{ message: string }> {
    return this.productService.createDetailSize(size);
  }

  @Put('/size/:id')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  updateSize(
    @Body() size: ProductDetailSizeDto,
    @Param() param: { id: number },
  ): Promise<{ message: string }> {
    return this.productService.updateSize(param.id, size);
  }

  @Delete('/size/:id')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  deleteSize(@Param() param: { id: number }): Promise<{ message: string }> {
    return this.productService.deleteSize(param.id);
  }

  @Get('/size/:productDetailId')
  getSizeByProductDetailId(@Param() param: { productDetailId: number }) {
    return this.productService.getAllSizeByDetailId(param.productDetailId);
  }
}
