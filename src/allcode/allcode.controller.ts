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

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  createTypeCode(@Body() typecode: AllcodeDto): Promise<{
    message: string;
    statusCode: number;
  }> {
    return this.allcodeService.createTypeCode(typecode);
  }

  @Get(':type')
  getAllCodeByType(
    @Param() param: { type: string },
    @Query() query: { page: number | undefined; size: number | undefined },
  ): Promise<AllcodeDto[]> {
    return this.allcodeService.getAllCodeByType(
      param.type,
      query.page,
      query.size,
    );
  }

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Put()
  updateAllcode(
    @Body() body: UpdateAllcodeDto,
  ): Promise<{ message: string; err: boolean }> {
    return this.allcodeService.updateAllcode(body);
  }

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  deleteAllcode(
    @Param() param: { id: number },
  ): Promise<{ message: string; err: boolean }> {
    return this.allcodeService.deleteAllcode(param.id);
  }
}
