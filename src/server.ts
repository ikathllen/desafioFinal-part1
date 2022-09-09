import app from './app';

const logger = require("./Middleware/logger");
var morgan  = require('morgan');


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
