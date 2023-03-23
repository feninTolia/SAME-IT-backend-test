export declare class CreateUserDto {
    readonly username: string;
    readonly email: string;
    readonly role: 'USER' | 'ADMIN';
    readonly firstName: string;
    readonly lastName: string;
    readonly state: 'MALE' | 'FEMALE' | 'UNDEFINED';
}
