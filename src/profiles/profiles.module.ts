import { Module } from '@nestjs/common';
import { ProfileService } from './profiles.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Profile } from './profiles.model';
import { User } from 'src/users/users.model';

@Module({
  providers: [ProfileService],
  imports: [SequelizeModule.forFeature([Profile, User])],
  exports: [ProfileService],
})
export class ProfilesModule {}
