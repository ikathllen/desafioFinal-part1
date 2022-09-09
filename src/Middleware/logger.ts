import 'dotenv/config';
const { createLogger, transports, format } = require('winston');
require('winston-mongodb');

const logger = createLogger({
    transports: [
        new transports.File({
            filename: 'Compass.log',
            level: 'info',
            format: format.combine(format.timestamp(), format.json())
        }),
        new transports.MongoDB({
            level: 'error',
            db: `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ac-j6qyjb6-shard-00-00.ffexeax.mongodb.net:27017,ac-j6qyjb6-shard-00-01.ffexeax.mongodb.net:27017,ac-j6qyjb6-shard-00-02.ffexeax.mongodb.net:27017/?ssl=true&replicaSet=atlas-d0bj49-shard-0&authSource=admin&retryWrites=true&w=majority`,
            options: {
                useUnifiedTopology: true
            },
            collection: 'CompassLogger',
            format: format.combine(format.timestamp(), format.json())
        })
    ]
})

module.exports = logger;