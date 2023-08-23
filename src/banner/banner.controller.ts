import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { BannerService } from './banner.service';
import { BannerDto } from './dto/banner.dto';
import { QueryBannerDto } from './dto/query-banner.dto';
import { Banner } from './entities/banner.entity';
import {
  ApiBearerAuth,
  ApiBody,
  ApiForbiddenResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ResponseCommonDto } from 'src/allcode/dto/allcode-api-response.dto';
import { BannerApiResponseDto } from './dto/banner-api-response.dto';

@ApiTags('banners')
@Controller('banner')
export class BannerController {
  constructor(private bannerService: BannerService) {}

  @ApiOperation({ summary: 'Create new banner' })
  @ApiBearerAuth()
  @ApiBody({ type: BannerDto })
  @ApiResponse({ status: 201, type: ResponseCommonDto })
  @ApiForbiddenResponse()
  @Post()
  createBanner(@Body() banner: BannerDto): Promise<{ message: string }> {
    return this.bannerService.createBanner(banner);
  }

  @ApiOperation({ summary: 'Update banner by id' })
  @ApiBearerAuth()
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: BannerDto })
  @ApiResponse({ status: 201, type: ResponseCommonDto })
  @ApiForbiddenResponse()
  @Put(':id')
  updateBanner(
    @Param() param: { id: number },
    @Body() banner: BannerDto,
  ): Promise<{ message: string }> {
    return this.bannerService.updateBanner(param.id, banner);
  }

  @ApiOperation({ summary: 'Get all banner' })
  @ApiResponse({ status: 200, type: BannerApiResponseDto })
  @ApiForbiddenResponse()
  @Get()
  getAllBanner(@Query() query: QueryBannerDto): Promise<{
    data: Banner[];
    meta: {
      current: number;
      size: number;
      totalItems: number;
    };
  }> {
    return this.bannerService.getAllBanner(query);
  }

  @Delete(':id')
  deleteBanner(@Param() param: { id: number }): Promise<{ message: string }> {
    return this.bannerService.deleteBanner(param.id);
  }
}
