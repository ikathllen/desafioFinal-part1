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
const errorEmail_1 = __importDefault(require("../validation/error/errorEmail"));
const UserInvalid_1 = __importDefault(require("../validation/error/UserInvalid"));
const loginRepository_1 = __importDefault(require("../repository/loginRepository"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class LoginService {
    findAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const clients = yield loginRepository_1.default.findAll();
            return clients;
        });
    }
    createUser(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const salt = yield bcrypt_1.default.genSalt(10);
            payload.senha = yield bcrypt_1.default.hash(payload.senha, salt);
            const verificaEmail = yield loginRepository_1.default.findByEmail(payload.email);
            if (verificaEmail)
                throw new errorEmail_1.default();
            const result = yield loginRepository_1.default.create(payload);
            return result;
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield loginRepository_1.default.delete(id);
            if (result == null)
                throw new UserInvalid_1.default();
            return result;
        });
    }
}
exports.default = new LoginService();
