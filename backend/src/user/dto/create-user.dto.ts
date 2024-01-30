import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  IsEmail,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'quyennt.201@gmail.com',
    description: 'The email of the User',
    format: 'email',
    uniqueItems: true,
    minLength: 6,
    maxLength: 25,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(25)
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    example: '123456',
    description: 'The password of the User',
    format: 'stirng',
    minLength: 6,
    maxLength: 25,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(255)
  readonly password: string;

  @ApiProperty({
    example: 'pejman hadavi',
    description: 'The name of the User',
    format: 'string',
    minLength: 6,
    maxLength: 255,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(255)
  readonly fullName: string;
}
