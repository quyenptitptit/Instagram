import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UserSchema } from './user.schema';
import { UserService } from './user.servicec';
import { AuthModule } from 'src/auth/auth.module';
import { UserController } from './user.controller';
import { LocalStrategy } from 'src/auth/strategies/local.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    AuthModule,
  ],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
