import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsIn, IsOptional, IsString, Length } from 'class-validator';

const roles = ['USER', 'ADMIN'];
const state = ['MALE', 'FEMALE', 'UNDEFINED'];

export class UpdateUserDto {
  @ApiProperty({ example: 'anyUser98', description: 'User name' })
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @Length(2, 16, { message: 'Not less than 2 and not more than 16' })
  readonly username?: string;

  @ApiProperty({ example: 'user@mail.com', description: 'Email' })
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @IsEmail({}, { message: 'Invalid email' })
  readonly email?: string;

  @ApiProperty({ example: 'ADMIN', description: 'User role' })
  @IsOptional()
  @IsIn(roles, { message: 'Must be "USER" or "ADMIN"' })
  readonly role?: 'USER' | 'ADMIN';

  @ApiProperty({ example: 'Kate', description: 'First name' })
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @Length(2, 16, { message: 'Not less than 2 and not more than 16' })
  readonly firstName?: string;

  @ApiProperty({ example: 'Shevchenko', description: 'Last name' })
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @Length(2, 16, { message: 'Not less than 2 and not more than 16' })
  readonly lastName?: string;

  @ApiProperty({ example: 'MALE', description: 'User state' })
  @IsOptional()
  @IsIn(state, { message: 'Must be "MALE", "FEMALE" or "UNDEFINED"' })
  readonly state?: 'MALE' | 'FEMALE' | 'UNDEFINED';
}
