import { Module } from '@nestjs/common';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Home,HomeSchema } from 'src/schemas/home.schema';
@Module({
  imports:[MongooseModule.forFeature([{ name: "HomeSchema", schema: HomeSchema }])],
  controllers: [HomeController],
  providers: [HomeService]
})
export class HomeModule {}
