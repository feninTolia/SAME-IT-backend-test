import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProfileService } from 'src/profiles/profiles.service';
import { CreateUserDto } from './dto/create-user.dto';
import { GetAllByRoleDto } from './dto/get-all-by-role.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private profilesService: ProfileService
  ) {}

  async createUser(dto: CreateUserDto) {
    const isEmailInUse = await this.userRepository.findOne({
      where: { email: dto.email },
    });
    if (isEmailInUse)
      throw new HttpException(
        'Email is already in use',
        HttpStatus.BAD_REQUEST
      );

    const user = await this.userRepository.create({
      username: dto.username,
      email: dto.email,
      role: dto.role,
    });

    const profile = await this.profilesService.createProfile({
      firstName: dto.firstName,
      lastName: dto.lastName,
      state: dto.state,
    });

    await this.userRepository.update(
      {
        profileId: profile.id,
      },
      { where: { email: user.email } }
    );

    user.profileId = profile.id;
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }

  async getAllUsersByRole(dto: GetAllByRoleDto) {
    const users = await this.userRepository.findAll({
      where: { role: dto.role },
      include: { all: true },
    });
    return users;
  }

  async updateUser(dto: UpdateUserDto, id: number) {
    try {
      if (!Number.isInteger(id))
        throw new HttpException(
          'ID must contain only numbers',
          HttpStatus.BAD_REQUEST
        );

      const user = await this.userRepository.findByPk(id);

      if (!user)
        throw new HttpException('User is not found', HttpStatus.BAD_REQUEST);

      const [res, updatedUser] = await this.userRepository.update(
        { username: dto.username, email: dto.email, role: dto.role },
        { where: { id }, returning: true }
      );

      const profile = await this.profilesService.updateProfile(
        { state: dto.state, firstName: dto.firstName, lastName: dto.lastName },
        user.profileId
      );

      return { ...updatedUser, profile };
    } catch (e) {
      if (e.errors) return e.errors.at(0).message;
      return e;
    }
  }

  async deleteUser(id: number) {
    if (!Number.isInteger(id))
      throw new HttpException(
        'ID must contain only numbers',
        HttpStatus.BAD_REQUEST
      );

    const user = await this.userRepository.findByPk(id);
    if (!user) return;
    await this.profilesService.deleteProfile(user.profileId);
    await this.userRepository.destroy({ where: { id: id } });
  }
}
