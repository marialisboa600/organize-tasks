const { checkTaskExistente, createNewTask, 
  getIdTasks, 
  getUpdateIdTasks,
  getDeletTasks,
    } = require('../models/modelTasks');
  
    const insertTask = async (req, res) => {
      console.log(req.body);
      const { titulo, status, descricao } = req.body;
    const productExists = await checkTaskExistente(titulo);
    if (productExists.result !== null) { 
      return res.status(422)
      .json({ err: { code: 'invalid_data', message: 'Task already exists' } }); 
    }

    const newProduct = await createNewTask(titulo, status, descricao);
    return res.status(201).json(newProduct);
    };
    
    const searchIdTasks = async (req, res) => {
      const { id } = req.params;
      const dados = await getIdTasks(id);
      if (dados === null) { 
        return res.status(422)
        .json({ err: { code: 'invalid_data', message: 'Wrong id format' } }); 
      }
      return res.status(200).json(dados);
    };
  
    const verificaTasks = async (id) => {
      const dados = await getIdTasks(id);
      return dados;
    };
  
    const updateIdTasks = async (req, _res) => {
      const { id } = req.params;
      await getUpdateIdTasks(id, req.body);
      const prodAtualizado = await getIdTasks(id);
      return prodAtualizado;
    };
  
    const deleteIdTasks = async (req, res) => {
      const { id } = req.params;
      const searchProd = await verificaTasks(id);
      if (searchProd === null) { 
        return res.status(422)
        .json({ err: { code: 'invalid_data', message: 'Wrong id format' } }); 
      }
      await getDeletTasks(id, req.body);
      return res.status(200).json(searchProd);
    };
    
    module.exports = { insertTask, 
      searchIdTasks, 
      updateIdTasks,
      deleteIdTasks,
       };