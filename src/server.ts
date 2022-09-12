import app from './app';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './Middleware/swagger.json';
import { request, response } from 'express';

const logger = require("./Middleware/logger");
var morgan  = require('morgan');


app.use("/compassMart-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.get("/compassMart-terms", (request: any, response: any) => {
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

const port = process.env.PORT || 3000 ;

app.listen(port, () => {
  console.log('info','Server on');
  logger.log('info','Server on');
}); 
