import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsIn, IsString, Length } from 'class-validator';

const roles = ['USER', 'ADMIN'];
const state = ['MALE', 'FEMALE', 'UNDEFINED'];

export class CreateUserDto {
  @ApiProperty({ example: 'anyUser98', description: 'User name' })
  @IsString({ message: 'Must be a string' })
  @Length(2, 16, { message: 'Not less than 2 and not more than 16' })
  readonly username: string;

  @ApiProperty({ example: 'user@mail.com', description: 'Email' })
  @IsString({ message: 'Must be a string' })
  @IsEmail({}, { message: 'Invalid email' })
  readonly email: string;

  @ApiProperty({ example: 'ADMIN', description: 'User role' })
  @IsIn(roles, { message: 'Must be "USER" or "ADMIN"' })
  readonly role: 'USER' | 'ADMIN';

  @ApiProperty({ example: 'Kate', description: 'First name' })
  @IsString({ message: 'Must be a string' })
  @Length(2, 16, { message: 'Not less than 2 and not more than 16' })
  readonly firstName: string;

  @ApiProperty({ example: 'Shevchenko', description: 'Last name' })
  @IsString({ message: 'Must be a string' })
  @Length(2, 16, { message: 'Not less than 2 and not more than 16' })
  readonly lastName: string;

  @ApiProperty({ example: 'FEMALE', description: 'User state' })
  @IsIn(state, { message: 'Must be "MALE", "FEMALE" or "UNDEFINED"' })
  readonly state: 'MALE' | 'FEMALE' | 'UNDEFINED';
}
