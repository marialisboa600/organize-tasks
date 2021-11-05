// importa o router
const express = require('express');

const router = express.Router();

const {
  insertTask,  
  searchIdTasks, 
  updateIdTasks,
  deleteIdTasks } = require('../controllers/controllerTasks');

const { getAllTasks } = require('../models/modelTasks');

router.get('/', async (_request, response) => {
  try {
  const all = await getAllTasks();
  console.log(all);
  return response.status(200).json(all);
  } catch (e) {
    response.status(400).json({ error: 'deu erro na api' });
  }
});
  
router.get('/:id', async (req, resp) => searchIdTasks(req, resp));
  
router.put('/:id', async (req, res) => {
    const all = await updateIdTasks(req, res);
    console.log(all);
 
  return res.status(200).json(all);
  }); 

 router.post('/', async (req, res) => insertTask(req, res));

 router.delete('/:id', async (req, res) => deleteIdTasks(req, res));

  module.exports = router;