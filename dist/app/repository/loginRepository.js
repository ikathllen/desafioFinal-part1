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
const LoginSchema_1 = __importDefault(require("../schema/LoginSchema"));
class LoginRepository {
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return LoginSchema_1.default.create(payload);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const clients = yield LoginSchema_1.default.find();
            return clients;
        });
    }
    findByEmail(value) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield LoginSchema_1.default.findOne({ email: value });
            if (result)
                return true;
            return false;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return LoginSchema_1.default.findByIdAndDelete(id);
        });
    }
}
exports.default = new LoginRepository();
