import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Topics extends Document {
  @Prop({ required: true })
  id: string;
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  description: string;
}

export const TopicSchema = SchemaFactory.createForClass(Topics);
