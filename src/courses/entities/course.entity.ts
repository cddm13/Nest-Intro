import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Modules } from '../../modules/entities/module.entity';

@Schema()
export class Course extends Document {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop(
    raw([
      {
        id: { type: String },
        title: { type: String },
        description: { type: String },
      },
    ]),
  )
  modules: Modules[];
}

export const CourseSchema = SchemaFactory.createForClass(Course);
