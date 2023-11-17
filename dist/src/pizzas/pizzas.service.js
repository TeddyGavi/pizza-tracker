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
exports.PizzasService = void 0;
const common_1 = require("@nestjs/common");
const pizza_entity_1 = require("./entities/pizza.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let PizzasService = class PizzasService {
    constructor(pizzaRepository) {
        this.pizzaRepository = pizzaRepository;
    }
    async create(createPizzaDto) {
        const newPizza = this.pizzaRepository.create(createPizzaDto);
        return await this.pizzaRepository.save(newPizza);
    }
    async createOrUpdate(pizzaDto) {
        const existingPizza = await this.pizzaRepository.findOne({
            where: { meat_type: pizzaDto.meat_type },
        });
        if (existingPizza) {
            existingPizza.meat_type = pizzaDto.meat_type;
            return await this.pizzaRepository.save(existingPizza);
        }
        const newPizza = this.pizzaRepository.create(pizzaDto);
        return await this.pizzaRepository.save(newPizza);
    }
    findAll() {
        return `This action returns all pizzas`;
    }
    findOne(id) {
        return `This action returns a #${id} pizza`;
    }
    update(id, updatePizzaDto) {
        return `This action updates a #${id} pizza`;
    }
    remove(id) {
        return `This action removes a #${id} pizza`;
    }
};
exports.PizzasService = PizzasService;
exports.PizzasService = PizzasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pizza_entity_1.Pizza)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PizzasService);
//# sourceMappingURL=pizzas.service.js.map