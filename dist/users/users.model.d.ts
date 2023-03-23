import { Model } from 'sequelize-typescript';
import { Profile } from 'src/profiles/profiles.model';
interface UserCreationAttrs {
    username: string;
    email: string;
    role: 'USER' | 'ADMIN';
    profileId: number;
}
export declare class User extends Model<User, UserCreationAttrs> {
    id: number;
    username: string;
    email: string;
    role: string;
    profileId: number;
    profile: Profile;
}
export {};
