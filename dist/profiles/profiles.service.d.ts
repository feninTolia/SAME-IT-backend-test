import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './profiles.model';
export declare class ProfileService {
    private profileRepository;
    constructor(profileRepository: typeof Profile);
    createProfile(dto: CreateProfileDto): Promise<Profile>;
    updateProfile(dto: UpdateProfileDto, profileId: number): Promise<Profile[]>;
    deleteProfile(profileId: number): Promise<void>;
}
