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
import { UpdateAllcodeDto } from './dto/update-allcode.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiForbiddenResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiSecurity,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  AllcodeApiResponseDto,
  ResponseWithErrDto,
} from './dto/allcode-api-response.dto';

@ApiTags('allcode')
@Controller('all-code')
export class AllcodeController {
  constructor(private readonly allcodeService: AllcodeService) {}

  @ApiOperation({ summary: 'Admin create new allcode' })
  @ApiBody({
    type: AllcodeDto,
    examples: {
      example1: new AllcodeDto(), // Sử dụng instance của AllcodeDto với các giá trị mặc định
    },
  })
  @ApiBearerAuth()
  @ApiResponse({ status: 201, description: 'The allcode has been created' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
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
  @ApiOperation({ summary: 'User get allcodes by type' })
  @ApiParam({
    name: 'type',
    required: true,
    type: String,
    description: 'Type allcode',
  })
  @ApiResponse({
    status: 200,
    type: AllcodeApiResponseDto,
    description: 'List and pagination of allcode',
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @Get(':type')
  getAllCodeByType(
    @Param() param: { type: string },
    @Query()
    query: {
      page: number | undefined;
      size: number | undefined;
      parentCode: string | undefined;
    },
  ): Promise<AllcodeApiResponseDto> {
    return this.allcodeService.getAllCodeByType(
      param.type,
      query.page,
      query.size,
      query.parentCode,
    );
  }

  @ApiOperation({ summary: 'Admin update allcode' })
  @ApiBody({ type: AllcodeDto })
  @ApiParam({ name: 'id', type: Number, description: 'Id of allcode' })
  @ApiResponse({ status: 201, type: ResponseWithErrDto })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
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
