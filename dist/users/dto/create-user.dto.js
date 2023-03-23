"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const roles = ['USER', 'ADMIN'];
const state = ['MALE', 'FEMALE', 'UNDEFINED'];
class CreateUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'anyUser98', description: 'User name' }),
    (0, class_validator_1.IsString)({ message: 'Must be a string' }),
    (0, class_validator_1.Length)(2, 16, { message: 'Not less than 2 and not more than 16' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user@mail.com', description: 'Email' }),
    (0, class_validator_1.IsString)({ message: 'Must be a string' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Invalid email' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ADMIN', description: 'User role' }),
    (0, class_validator_1.IsIn)(roles, { message: 'Must be "USER" or "ADMIN"' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Kate', description: 'First name' }),
    (0, class_validator_1.IsString)({ message: 'Must be a string' }),
    (0, class_validator_1.Length)(2, 16, { message: 'Not less than 2 and not more than 16' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Shevchenko', description: 'Last name' }),
    (0, class_validator_1.IsString)({ message: 'Must be a string' }),
    (0, class_validator_1.Length)(2, 16, { message: 'Not less than 2 and not more than 16' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'FEMALE', description: 'User state' }),
    (0, class_validator_1.IsIn)(state, { message: 'Must be "MALE", "FEMALE" or "UNDEFINED"' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "state", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map