import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString, Validate } from 'class-validator';
import { IsArrayOfMongoIds } from '../../common/validations/mongoid-array.validation';

export class CreateModuleDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @ApiProperty()
  @IsArray()
  @Validate(IsArrayOfMongoIds)
  readonly topics?: string[];
}
