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
exports.ProfileService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const profiles_model_1 = require("./profiles.model");
let ProfileService = class ProfileService {
    constructor(profileRepository) {
        this.profileRepository = profileRepository;
    }
    async createProfile(dto) {
        const profile = await this.profileRepository.create(dto);
        return profile;
    }
    async updateProfile(dto, profileId) {
        const [res, profile] = await this.profileRepository.update(Object.assign({}, dto), { where: { id: profileId }, returning: true });
        return profile;
    }
    async deleteProfile(profileId) {
        await this.profileRepository.destroy({ where: { id: profileId } });
    }
};
ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(profiles_model_1.Profile)),
    __metadata("design:paramtypes", [Object])
], ProfileService);
exports.ProfileService = ProfileService;
//# sourceMappingURL=profiles.service.js.map