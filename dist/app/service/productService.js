"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productRepository_1 = __importDefault(require("../repository/productRepository"));
const productSchema_1 = __importDefault(require("../schema/productSchema"));
const IdExistProductValidation_1 = __importDefault(require("../validation/error/IdExistProductValidation"));
let mapper = require('../mapper/mapper.json');
const fs = require('fs');
const objectMapper = require('object-mapper');
class ProductService {
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultPost = yield productRepository_1.default.create(payload);
            return resultPost;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const resultGet = yield productRepository_1.default.findAll();
            return resultGet;
        });
    }
    findByStock() {
        return __awaiter(this, void 0, void 0, function* () {
            const resultGetByStock = productSchema_1.default.find({ qtd_stock: { $lt: 100 } });
            return resultGetByStock.sort({ qtd_stock: 1 }).limit(50);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultGetById = yield productRepository_1.default.findById(id);
            if (resultGetById === null) {
                throw new IdExistProductValidation_1.default();
            }
            return resultGetById;
        });
    }
    findByMapper(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const obj = yield productRepository_1.default.findByMapper(id), mapper = {};
            function mapThat(obj, mapper) {
                Object.keys(obj).forEach(function (key) {
                    if (typeof obj[key] === 'object') {
                        // Se for um objeto, vamos recursivamente
                        mapThat(obj[key], mapper);
                    }
                    else {
                        // Se não for, adicione uma chave/valor
                        mapper[key.toLowerCase()] = obj[key];
                    }
                });
            }
            mapThat(obj, mapper);
            console.log(mapper);
            return obj;
        });
    }
    update(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultPut = yield productRepository_1.default.update(id, payload);
            if (resultPut === null) {
                throw new IdExistProductValidation_1.default();
            }
            return resultPut;
        });
    }
    updateOne(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultPatch = yield productRepository_1.default.updateOne(id, payload);
            if (resultPatch === null) {
                throw new IdExistProductValidation_1.default();
            }
            return resultPatch;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultDelete = yield productRepository_1.default.delete(id);
            if (resultDelete === null) {
                throw new IdExistProductValidation_1.default();
            }
            return resultDelete;
        });
    }
}
exports.default = new ProductService();
