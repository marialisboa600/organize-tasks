// Arquivos onde iremos executar as operações do banco de dados, como criar conexões e executar queries.
// models/connection.js

const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://localhost:27017/OrganizeTasks';
const DB_NAME = 'OrganizeTasks';

const connection = () => MongoClient.connect(MONGO_DB_URL, {
   useNewUrlParser: true, 
   useUnifiedTopology: true })

    .then((conn) => conn.db(DB_NAME))
    .catch((err) => {
    console.error(err);
    process.exit();
  });
  
module.exports = { connection };
