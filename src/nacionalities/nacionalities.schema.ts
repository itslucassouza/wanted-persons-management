import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NationalityDocument = Nationality & Document;

@Schema()
export class Nationality {
  @Prop({ unique: true })
  name: string;
}

export const NationalitySchema = SchemaFactory.createForClass(Nationality);