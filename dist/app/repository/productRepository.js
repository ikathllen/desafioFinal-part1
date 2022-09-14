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
const productSchema_1 = __importDefault(require("../schema/productSchema"));
class ProductRepository {
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return productSchema_1.default.create(payload);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const myCustomLabels = {
                docs: 'products',
                limit: 'limit',
                totalPages: 'total',
                pagingCounter: false,
                hasPrevPage: false,
                hasNextPage: false,
                prevPage: false,
                nextPage: false,
            };
            const options = {
                page: 1,
                limit: 100,
                customLabels: myCustomLabels,
            };
            const products = yield productSchema_1.default.paginate({}, options);
            return products;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return productSchema_1.default.findById(id);
        });
    }
    findByMapper(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return productSchema_1.default.findByMapper(id);
        });
    }
    update(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return productSchema_1.default.findByIdAndUpdate(id, payload);
        });
    }
    updateOne(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return productSchema_1.default.findByIdAndUpdate(id, payload);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return productSchema_1.default.findByIdAndDelete(id);
        });
    }
}
exports.default = new ProductRepository();
