"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserInvalid {
    constructor() {
        this.message = 'User Id is invalid.';
        this.statusCode = 400;
    }
}
exports.default = UserInvalid;
