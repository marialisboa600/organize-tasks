const { ObjectId } = require('mongodb');
const mongoConnection = require('../connection/connection');

const checkTaskExistente = async (tasks) => {
  console.log();
return mongoConnection.connection().then((db) => db.collection('tasks')
.findOne({ tasks }).then((result) => ({ result })));
};

const createNewTask = async (titulo, status, descricao) => 
mongoConnection.connection().then((db) =>
  db
      .collection('tasks')
      .insertOne({ titulo, status, descricao })
      .then((result) => ({ _id: result.insertedId, titulo, status, descricao })));

      const getAllTasks = async () => 

      mongoConnection.connection().then((db) =>
       db
           .collection('tasks')
           .find().toArray());
     
     const getIdTasks = async (id) => {
     if (!ObjectId.isValid(id)) return null;
       return mongoConnection.connection().then((db) =>
         db
           .collection('tasks')
           .findOne({ _id: ObjectId(id) }));
     };
     
     const getUpdateIdTasks = async (id, dados) => {
       const { titulo, status, descricao } = dados;
       if (!ObjectId.isValid(id)) return null;
         return mongoConnection.connection().then((db) =>
           db
             .collection('tasks')
             .updateOne({ _id: ObjectId(id) }, { $set: { titulo, status, descricao } }));
     };
     
     const getDeletTasks = async (id, dados) => {
       const { titulo, status, descricao } = dados;
       if (!ObjectId.isValid(id)) return null;
         return mongoConnection.connection().then((db) =>
           db
             .collection('tasks')
             .deleteOne({ _id: ObjectId(id) }, { $set: { titulo, status, descricao } }));
     };
     
      module.exports = { 
        checkTaskExistente,
        createNewTask, 
        getAllTasks,
        getIdTasks, 
        getUpdateIdTasks,
        getDeletTasks,
      };