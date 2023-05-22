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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_ts_1 = require("./user.service.ts");
const user_schema_1 = require("./user.schema");
const formatJson_1 = require("../utils/formatJson");
const data_1 = require("../data");
const nationalities_service_1 = require("../nacionalities/nationalities.service");
const occupation_service_1 = require("../occupations/occupation.service");
const swagger_1 = require("@nestjs/swagger");
let UserController = class UserController {
    constructor(userService, nationalityService, occupationService) {
        this.userService = userService;
        this.nationalityService = nationalityService;
        this.occupationService = occupationService;
    }
    async create() {
        const cleanedJson = (0, formatJson_1.removeQuotesFromKeysInArray)(data_1.dataMock);
        const createdUsers = await this.userService.create(cleanedJson);
        const uniqueNationalities = Array.from(new Set(cleanedJson.map(user => user.nationality)));
        for (const nationality of uniqueNationalities) {
            await this.nationalityService.create(String(nationality));
        }
        const uniqueOcuppations = Array.from(new Set(cleanedJson.map(user => user.occupations)));
        for (const occupations of uniqueOcuppations) {
            await this.occupationService.create(String(occupations));
        }
        return createdUsers;
    }
    async findByNationality(nationality) {
        return this.userService.findByNationality(nationality);
    }
    async findAllUsers() {
        return this.userService.findAllUsers();
    }
    async findByUsername(username) {
        return this.userService.findByUsername(username);
    }
    async findByOccupation(occupations) {
        return this.userService.findByOccupation(occupations);
    }
};
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all users' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success', type: [user_schema_1.User] }),
    (0, common_1.Get)('nationality/:nationality'),
    __param(0, (0, common_1.Param)('nationality')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findByNationality", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all users' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success', type: [user_schema_1.User] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAllUsers", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all users' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success', type: [user_schema_1.User] }),
    (0, common_1.Get)('username/:username'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findByUsername", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all users' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success', type: [user_schema_1.User] }),
    (0, common_1.Get)('occupation/:occupations'),
    __param(0, (0, common_1.Param)('occupations')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findByOccupation", null);
UserController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_ts_1.UserService,
        nationalities_service_1.NationalityService,
        occupation_service_1.OccupationService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map