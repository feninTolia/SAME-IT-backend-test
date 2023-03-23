export class UpdateProfileDto {
  readonly firstName?: string;
  readonly lastName?: string;
  readonly state?: 'MALE' | 'FEMALE' | 'UNDEFINED';
}
