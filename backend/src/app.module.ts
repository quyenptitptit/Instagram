import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModule } from './post/post.modulo';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://quyennt201:lqmdmeo2001@cluster-mongo.aexgofo.mongodb.net/instagram',
      // 'mongodb+srv://qq-ig:lqmdmeo2001@atlascluster.td7o5th.mongodb.net/',
    ),
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    PostModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
