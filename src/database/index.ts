import mongoose from 'mongoose';
import 'dotenv/config'

class Database {
  constructor () {
    this.connect();
  }
  connect () {
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}.ffexeax.mongodb.net/${process.env.DB_NAME}`);
    //mongodb+srv://dbMart:<password>@apimart.ffexeax.mongodb.net/?retryWrites=true&w=majority
    mongoose.connection.on('error', console.log.bind(console, 'Error connection'));
    mongoose.connection.once('open', () => {
      console.log('Connected database.');
    });
    return mongoose.connection;
  }
    
}

export default new Database().connect;