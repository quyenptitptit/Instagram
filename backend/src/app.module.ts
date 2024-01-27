import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'
import { PostModule } from './post/post.modulo';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://qq-ig:lqmdmeo2001@atlascluster.td7o5th.mongodb.net/'), PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 