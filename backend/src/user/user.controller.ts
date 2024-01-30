import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.servicec';
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { LocalStrategy } from 'src/auth/strategies/local.strategy';
import { LoginUserDto } from './dto/login-user.dto';
import { LocalAuthGuard } from 'src/auth/guard/local.guard';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register user' })
  @ApiCreatedResponse({})
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.service.create(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: 'Login user' })
  @ApiCreatedResponse({})
  @Post('login')
  async login(@Body() user: LoginUserDto): Promise<any> {
    return this.service.login(user);
  }
}
