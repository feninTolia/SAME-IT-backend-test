import { ApiProperty } from '@nestjs/swagger';
import { IsIn } from 'class-validator';

const roles = ['USER', 'ADMIN'];
export class GetAllByRoleDto {
  @ApiProperty({ example: 'USER', description: 'User role' })
  @IsIn(roles, { message: 'Must be "USER" or "ADMIN"' })
  readonly role: 'USER' | 'ADMIN';
}
