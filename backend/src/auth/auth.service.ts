import { User } from 'src/user/interfaces/user.interface';
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 12);
  }

  async comparePassword(
    password: string,
    storePasswordHash: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, storePasswordHash);
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({
      email: email,
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const check = await this.comparePassword(password, user.password);
    if (!check) {
      throw new NotFoundException('Password is incorrect');
    }
    return user;
  }

  // async login(user: User) {
  //   const payload = { email: user.email };
  //   return { access_token: this.jwtService.sign(payload) };
  // }

  // loginGoogle(req: any) {
  //   if (!req.user) {
  //     return 'No user from google';
  //   }
  //   return {
  //     message: 'User information from google',
  //     user: req.user,
  //   };
  // }
}
