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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const profiles_service_1 = require("../profiles/profiles.service");
const users_model_1 = require("./users.model");
let UsersService = class UsersService {
    constructor(userRepository, profilesService) {
        this.userRepository = userRepository;
        this.profilesService = profilesService;
    }
    async createUser(dto) {
        const isEmailInUse = await this.userRepository.findOne({
            where: { email: dto.email },
        });
        if (isEmailInUse)
            throw new common_1.HttpException('Email is already in use', common_1.HttpStatus.BAD_REQUEST);
        const user = await this.userRepository.create({
            username: dto.username,
            email: dto.email,
            role: dto.role,
        });
        const profile = await this.profilesService.createProfile({
            firstName: dto.firstName,
            lastName: dto.lastName,
            state: dto.state,
        });
        await this.userRepository.update({
            profileId: profile.id,
        }, { where: { email: user.email } });
        user.profileId = profile.id;
        return user;
    }
    async getAllUsers() {
        const users = await this.userRepository.findAll({ include: { all: true } });
        return users;
    }
    async getAllUsersByRole(dto) {
        const users = await this.userRepository.findAll({
            where: { role: dto.role },
            include: { all: true },
        });
        return users;
    }
    async updateUser(dto, id) {
        const user = await this.userRepository.findByPk(id);
        if (!user)
            return;
        const [res, updatedUser] = await this.userRepository.update({ username: dto.username, email: dto.email, role: dto.role }, { where: { id }, returning: true });
        const profile = await this.profilesService.updateProfile({ state: dto.state, firstName: dto.firstName, lastName: dto.lastName }, user.profileId);
        return Object.assign(Object.assign({}, updatedUser), { profile });
    }
    async deleteUser(id) {
        const user = await this.userRepository.findByPk(id);
        if (!user)
            return;
        await this.profilesService.deleteProfile(user.profileId);
        await this.userRepository.destroy({ where: { id } });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(users_model_1.User)),
    __metadata("design:paramtypes", [Object, profiles_service_1.ProfileService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map