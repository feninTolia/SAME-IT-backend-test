import { Column, DataType, HasOne, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Profile } from 'src/profiles/profiles.model';

interface UserCreationAttrs {
  username: string;
  email: string;
  role: 'USER' | 'ADMIN';
  profileId: number;
}

@Table({ tableName: 'user', updatedAt: false })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '8', description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'anyUser', description: 'User name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username: string;

  @ApiProperty({ example: 'user@mail.com', description: 'Email' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: 'ADMIN', description: 'User role' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  role: string;

  @ApiProperty({ example: '13', description: 'Unique profile id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
  })
  profileId: number;

  @HasOne(() => Profile)
  profile: Profile;
}
