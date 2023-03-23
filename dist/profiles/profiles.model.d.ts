import { Model } from 'sequelize-typescript';
import { User } from 'src/users/users.model';
interface ProfileCreationAttrs {
    firstName: string;
    lastName: string;
    state: string;
}
export declare class Profile extends Model<Profile, ProfileCreationAttrs> {
    id: number;
    firstName: string;
    lastName: string;
    state: string;
    user: User;
}
export {};
