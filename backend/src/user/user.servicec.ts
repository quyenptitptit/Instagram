import { JwtPayload } from './../auth/interfaces/jwt-payload.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private model: Model<User>,
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new this.model(createUserDto);
    await this.isEmailUnique(user.email);
    user.password = await this.authService.hashPassword(user.password);
    await user.save();
    return user;
  }

  async login(loginDto: LoginUserDto) {
    // const user = await this.authService.validateUser(
    //   loginDto.email,
    //   loginDto.password,
    // );
    const user = await this.findByEmail(loginDto.email);
    const payload: JwtPayload = {
      userId: user._id,
    };
    return { user, access_token: this.jwtService.sign(payload) };
  }

  async findAll(): Promise<User[]> {
    try {
      return this.model.find().exec();
    } catch (e) {
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    }
  }

  async findById(id: mongoose.Schema.Types.ObjectId): Promise<User> {
    const user = await this.model.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.model.findOne({ email: email });
    if (!user) {
      throw new NotFoundException('Email not found');
    }
    return user;
  }

  private async isEmailUnique(email: string) {
    const user = await this.model.findOne({ email: email });
    if (user) {
      throw new BadRequestException('Email most be unique.');
    }
  }

  private async checkPassword(attemptPass: string, user) {
    const match = await bcrypt.compare(attemptPass, user.password);
    if (!match) {
      throw new NotFoundException('Wrong password.');
    }
    return match;
  }

  //   async update(
  //     id: string,
  //     updatePost: UpdatePost,
  //   ): Promise<{ result: string }> {
  //     try {
  //       await this.model.findByIdAndUpdate(id, updatePost);
  //       return { result: 'update success' };
  //     } catch (e) {
  //       throw new HttpException(e, HttpStatus.BAD_REQUEST);
  //     }
  //   }

  async delete(id: string): Promise<{ result: string }> {
    try {
      await this.model.findByIdAndDelete(id);
      return { result: 'delete success' };
    } catch (e) {
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    }
  }
}
