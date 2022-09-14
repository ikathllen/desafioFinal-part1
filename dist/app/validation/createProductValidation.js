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
const joi_1 = __importDefault(require("joi"));
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const schema = joi_1.default.object({
            title: joi_1.default.string().required(),
            description: joi_1.default.string().required(),
            department: joi_1.default.string().required(),
            brand: joi_1.default.string().required(),
            price: joi_1.default.number().required().greater(0).custom((value, helper) => {
                if (value > 1000) {
                    return helper.error('exceeds the highest maximum of the product');
                }
                else {
                    return true;
                }
            }),
            qtd_stock: joi_1.default.number().required().custom((value, helper) => {
                if (value <= 0 || value > 100000) {
                    return helper.error('Stock must have more than 1 item and less than 100K items');
                }
                else {
                    return true;
                }
            }),
            bar_codes: joi_1.default.string().required().custom((value, helper) => {
                if (value.length !== 13) {
                    return helper.error('invalid code: must be 13 digits.');
                }
                else {
                    return true;
                }
            }),
        });
        const { error } = yield schema.validate(req.body, { abortEarly: true });
        if (error) {
            throw error;
        }
        return next();
    }
    catch (error) {
        return res.status(400).json(error);
    }
});
