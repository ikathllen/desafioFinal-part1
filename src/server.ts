import app from './app';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './Middleware/swagger.json';
import { request, response } from 'express';

const logger = require("./Middleware/logger");
var morgan  = require('morgan');


app.use("/compassMart-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.get("/compassMart-terms", (request, response) => {
  return response.json({
  message: "Compass.uol terms of service",
  })
})

class MyStream {
  write(text: string) {
      logger.info(text.replace(/\n$/, ''));
  }
}
let myStream = new MyStream()

app.use(morgan("combined", {  stream: myStream }));

app.use((req:any, res:any, next:any) => {
  logger.info(req.body);
  let oldSend = res.send;
  res.send = function (data:any) {
    logger.info(JSON.parse(data));
    oldSend.apply(res, arguments);
  }
  next();
})

app.listen(3000, () => {
  logger.log('info','Server on');
}); 
