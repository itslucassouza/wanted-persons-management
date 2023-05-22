import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OccupationDocument = Occupation & Document;

@Schema()
export class Occupation {
  @Prop({ unique: true })
  name: string;
}

export const OccupationSchema = SchemaFactory.createForClass(Occupation);