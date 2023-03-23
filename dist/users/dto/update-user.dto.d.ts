export declare class UpdateUserDto {
    readonly username?: string;
    readonly email?: string;
    readonly role?: 'USER' | 'ADMIN';
    readonly firstName?: string;
    readonly lastName?: string;
    readonly state?: 'MALE' | 'FEMALE' | 'UNDEFINED';
}
