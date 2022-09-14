"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("./Middleware/swagger.json"));
const logger = require("./Middleware/logger");
var morgan = require('morgan');
app_1.default.use("/api/v1/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app_1.default.get("/api/v1/compassMart-terms", (request, response) => {
    return response.json({
        message: "Compass.uol terms of service",
    });
});
class MyStream {
    write(text) {
        logger.info(text.replace(/\n$/, ''));
    }
}
let myStream = new MyStream();
app_1.default.use(morgan("combined", { stream: myStream }));
const port = process.env.PORT || 3000;
app_1.default.listen(port, () => {
    console.log('Server on');
    logger.log('info', 'Server on');
});
