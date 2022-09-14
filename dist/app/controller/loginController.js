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
const loginService_1 = __importDefault(require("../service/loginService"));
const LoginSchema_1 = __importDefault(require("../schema/LoginSchema"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt = require("jsonwebtoken");
class UserController {
    findAllUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (req.query) {
                    const resultname = yield LoginSchema_1.default.find(req.query);
                    return res.status(200).json(resultname);
                }
                ;
                const users = yield loginService_1.default.findAllUser();
                res.status(200).send(users);
            }
            catch (error) {
                return res.status(400).json({ error });
            }
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield loginService_1.default.createUser(req.body);
                return res.status(201).json({ user });
            }
            catch (error) {
                if (error instanceof errorEmail_1.default)
                    return res.status(error.statusCode).json({ Error: error.message });
                return res.status(500).json({ error });
            }
        });
    }
    authenticate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, senha } = req.body;
            const id = req.params.id;
            const user = yield LoginSchema_1.default.findOne({ email });
            const teste = String(user === null || user === void 0 ? void 0 : user.senha);
            const token = jwt.sign({ id }, process.env.SECRET, {
                //05 dias
                expiresIn: "5d",
            });
            if (user && (yield bcrypt_1.default.compare(senha, teste))) {
                user === null || user === void 0 ? void 0 : user.senha;
                res.send({ user, token });
            }
            else {
                res.status(400).json("invalid data");
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                yield loginService_1.default.deleteUser(id);
                return res.status(204).json();
            }
            catch (error) {
                return res.status(404).json({ error });
            }
        });
    }
}
exports.default = new UserController();
