import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { isMongoId } from 'class-validator';

export class MongoIdPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    console.log(value);
    if (!isMongoId(value)) {
      throw new BadRequestException(`${value} is not a valid mongo id`);
    }
    return value;
  }
}
