import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Types } from 'mongoose';
import { Topics } from '../../topics/entities/topic.entity';

@Schema()
export class Modules extends Document {
  @Prop({ required: true })
  id: string;
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  description: string;
  @Prop({
    required: false,
    default: [],
    type: [Types.ObjectId],
    ref: Topics.name,
  })
  topics?: string[];
}

export const ModuleSchema = SchemaFactory.createForClass(Modules);
