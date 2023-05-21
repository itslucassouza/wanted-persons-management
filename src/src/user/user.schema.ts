import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Nationality } from '../nacionalities/nacionalities.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  title: string;

  @Prop()
  remarks: string;

  @Prop()
  occupations: string;

  @Prop()
  images: string;
  
  @Prop()
  nationality: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Nationality' })
  nationalityId: Nationality;
}

export const UserSchema = SchemaFactory.createForClass(User);