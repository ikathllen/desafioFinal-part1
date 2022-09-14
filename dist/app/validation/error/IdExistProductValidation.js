"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IdExistProduct {
    constructor() {
        this.message = 'ID is not registered in the database.';
        this.statusCode = 404;
    }
}
exports.default = IdExistProduct;
