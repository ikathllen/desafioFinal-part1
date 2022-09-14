"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginValidation_1 = __importDefault(require("../app/validation/loginValidation"));
const loginController_1 = __importDefault(require("../app/controller/loginController"));
const router = (0, express_1.Router)();
router.post('/api/v1/user', loginValidation_1.default, loginController_1.default.createUser);
router.post('/api/v1/authenticate', loginValidation_1.default, loginController_1.default.authenticate);
router.get('/api/v1/user', loginController_1.default.findAllUser);
router.delete('/api/v1/user/:id', loginController_1.default.deleteUser);
exports.default = router;
