"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
class Database {
    constructor() {
        this.connect();
    }
    connect() {
        mongoose_1.default.connect(`${process.env.MONGO}`);
        //mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ac-j6qyjb6-shard-00-00.ffexeax.mongodb.net:27017,ac-j6qyjb6-shard-00-01.ffexeax.mongodb.net:27017,ac-j6qyjb6-shard-00-02.ffexeax.mongodb.net:27017/?ssl=true&replicaSet=atlas-d0bj49-shard-0&authSource=admin&retryWrites=true&w=majority`);
        mongoose_1.default.connection.on('error', console.log.bind(console, 'Error connection'));
        mongoose_1.default.connection.once('open', () => {
            console.log('Connected database.');
        });
        return mongoose_1.default.connection;
    }
}
exports.default = new Database().connect;
