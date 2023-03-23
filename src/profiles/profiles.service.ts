import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './profiles.model';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(Profile) private profileRepository: typeof Profile
  ) {}

  async createProfile(dto: CreateProfileDto) {
    const profile = await this.profileRepository.create(dto);
    return profile;
  }

  async updateProfile(dto: UpdateProfileDto, profileId: number) {
    const [res, profile] = await this.profileRepository.update(
      { ...dto },
      { where: { id: profileId }, returning: true }
    );

    return profile;
  }

  async deleteProfile(profileId: number) {
    await this.profileRepository.destroy({ where: { id: profileId } });
  }
}
