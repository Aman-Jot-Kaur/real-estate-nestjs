import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeModule } from './home/home.module';

import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb://localhost:27017/your_mongodb_database',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
