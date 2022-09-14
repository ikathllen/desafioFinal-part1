"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routerProduct_1 = __importDefault(require("./routerProduct"));
const routerLogin_1 = __importDefault(require("./routerLogin"));
exports.default = [routerProduct_1.default, routerLogin_1.default];
