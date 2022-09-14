"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvalidProduct {
    constructor() {
        this.message = 'ID provided is different from default';
        this.statusCode = 400;
    }
}
exports.default = InvalidProduct;
