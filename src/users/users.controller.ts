import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { GetAllByRoleDto } from './dto/get-all-by-role.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'User creation' })
  @ApiResponse({ status: 201, type: User })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: 'User update' })
  @ApiResponse({ status: 200, type: User })
  @Patch('/:id')
  update(@Param('id') id: number, @Body() dto: UpdateUserDto) {
    const parsedId = parseInt(`${id}`);
    return this.usersService.updateUser(dto, parsedId);
  }

  @ApiOperation({ summary: 'Retrieval of all users' })
  @ApiResponse({ status: 200, type: User })
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: 'Retrieval of all users by role' })
  @ApiResponse({ status: 200, type: User })
  @Get('/role')
  getAllByRole(@Body() dto: GetAllByRoleDto) {
    return this.usersService.getAllUsersByRole(dto);
  }

  @ApiOperation({ summary: 'Deleting a user ' })
  @ApiResponse({ status: 204 })
  @HttpCode(204)
  @Delete(':id')
  async deleteRow(@Param('id') id: number): Promise<void> {
    const parsedId = parseInt(`${id}`);
    await this.usersService.deleteUser(parsedId);
  }
}
