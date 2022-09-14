import app from './app';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './Middleware/swagger.json';
import { request, response } from 'express';

const logger = require("./Middleware/logger");
var morgan  = require('morgan');


app.use("/api/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.get("/api/v1/compassMart-terms", (request: any, response: any) => {
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

const port = process.env.PORT || 3000 ;

app.listen(port, () => {
  console.log('Server on');
  logger.log('info','Server on');
}); 
