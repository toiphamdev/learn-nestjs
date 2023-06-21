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

@Controller('banner')
export class BannerController {
  constructor(private bannerService: BannerService) {}

  @Post()
  createBanner(@Body() banner: BannerDto): Promise<{ message: string }> {
    return this.bannerService.createBanner(banner);
  }
  @Put(':id')
  updateBanner(
    @Param() param: { id: number },
    @Body() banner: BannerDto,
  ): Promise<{ message: string }> {
    return this.bannerService.updateBanner(param.id, banner);
  }

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
