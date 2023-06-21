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
import { AllcodeService } from './allcode.service';
import { AllcodeDto } from './dto/allcode.dto';
import { JwtAuthGuard, RolesGuard } from '../auth/guard';
import { Role } from '../user/entities/roles.enum';
import { Roles } from '../auth/decorator/roles.decorator';
import { type } from 'os';
import { UpdateAllcodeDto } from './dto/update-allcode.dto';
import { query } from 'express';

@Controller('all-code')
export class AllcodeController {
  constructor(private readonly allcodeService: AllcodeService) {}

  @Post()
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  createTypeCode(@Body() typecode: AllcodeDto): Promise<{
    message: string;
    statusCode: number;
  }> {
    return this.allcodeService.createTypeCode(typecode);
  }
  //da push len
  @Get(':type')
  getAllCodeByType(
    @Param() param: { type: string },
    @Query() query: { page: number | undefined; size: number | undefined },
  ): Promise<{
    data: AllcodeDto[];
    meta: {
      current: number;
      size: number;
      totalItems: number;
    };
  }> {
    return this.allcodeService.getAllCodeByType(
      param.type,
      query.page,
      query.size,
    );
  }

  @Put()
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  updateAllcode(
    @Body() body: UpdateAllcodeDto,
  ): Promise<{ message: string; err: boolean }> {
    return this.allcodeService.updateAllcode(body);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  deleteAllcode(
    @Param() param: { id: number },
  ): Promise<{ message: string; err: boolean }> {
    return this.allcodeService.deleteAllcode(param.id);
  }
}
