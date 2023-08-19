import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
export type HomeDocument = HydratedDocument<Home>;

@Schema()
export class Home {
  @Prop({ default: uuidv4, type: 'uuid' })
  id: string;

  @Prop()
  number_of_bedrooms: number;

  @Prop()
  number_of_bathrooms: number;

  @Prop()
  address: string;

  @Prop()
  city: string;

  @Prop({ default: Date.now() })
  listed_date: Date;

  @Prop()
  property_type: string;

  @Prop()
  landsize: number;
  
  @Prop()
  price: number;
}

export const HomeSchema = SchemaFactory.createForClass(Home);
