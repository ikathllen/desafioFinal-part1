"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailExist {
    constructor() {
        this.message = 'Email address already registered in the database.';
        this.statusCode = 400;
    }
}
exports.default = EmailExist;
