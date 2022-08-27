import mongoose from 'mongoose';
import 'dotenv/config';

class Database {
  constructor () {
    this.connect();
  }
  connect () {
    //mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}.ffexeax.mongodb.net/${process.env.DB_NAME}`);
    mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ac-j6qyjb6-shard-00-00.ffexeax.mongodb.net:27017,ac-j6qyjb6-shard-00-01.ffexeax.mongodb.net:27017,ac-j6qyjb6-shard-00-02.ffexeax.mongodb.net:27017/?ssl=true&replicaSet=atlas-d0bj49-shard-0&authSource=admin&retryWrites=true&w=majority`);
    mongoose.connection.on('error', console.log.bind(console, 'Error connection'));
    mongoose.connection.once('open', () => {
      console.log('Connected database.');
    });
    return mongoose.connection;
  }

}

export default new Database().connect;