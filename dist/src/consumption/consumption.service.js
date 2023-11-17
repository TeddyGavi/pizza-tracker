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
exports.ConsumptionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const consumption_entity_1 = require("./entities/consumption.entity");
const typeorm_2 = require("typeorm");
let ConsumptionService = class ConsumptionService {
    constructor(consumptionRepository) {
        this.consumptionRepository = consumptionRepository;
    }
    async create(createConsumptionDto) {
        const newConsumption = this.consumptionRepository.create(createConsumptionDto);
        return await this.consumptionRepository.save(newConsumption);
    }
    async createOrUpdate(consumptionDto) {
        const existingConsumption = await this.consumptionRepository
            .createQueryBuilder("consumption")
            .leftJoinAndSelect("consumption.userId", "user")
            .where("user.id = :userId", { userId: consumptionDto.userId })
            .getOne();
        console.log(existingConsumption);
        if (existingConsumption) {
            existingConsumption.userId = consumptionDto.userId;
            existingConsumption.pizzaId = consumptionDto.pizzaId;
            existingConsumption.consumed_at = consumptionDto.consumed_at;
            return await this.consumptionRepository.save(existingConsumption);
        }
        const newConsumption = this.consumptionRepository.create({
            userId: consumptionDto.userId,
            pizzaId: consumptionDto.pizzaId,
            consumed_at: consumptionDto.consumed_at,
        });
        return await this.consumptionRepository.save(newConsumption);
    }
    findAll() {
        return `This action returns all consumption`;
    }
    findOne(id) {
        return `This action returns a #${id} consumption`;
    }
    update(id, updateConsumptionDto) {
        return `This action updates a #${id} consumption`;
    }
    remove(id) {
        return `This action removes a #${id} consumption`;
    }
};
exports.ConsumptionService = ConsumptionService;
exports.ConsumptionService = ConsumptionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(consumption_entity_1.Consumption)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ConsumptionService);
//# sourceMappingURL=consumption.service.js.map