import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateModuleDto } from '../../modules/dto/create-module.dto';

export class CreateCourseDto {
  @ApiProperty({ description: 'Original ID' })
  @IsNotEmpty()
  @IsString()
  readonly id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Title' })
  readonly title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Description' })
  readonly description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateModuleDto)
  readonly modules: CreateModuleDto[];
}
