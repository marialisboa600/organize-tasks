// importa o express 

const express = require('express');

// importa o cors

const cors = require('cors');

// importa a minha rota
const routerTasks = require('./routes/routerTasks');

// instancia o express
const app = express();

// instancia o cors

app.use(cors());

app.use(express.json());

// referencia a porta
const port = '3001';

// usando a rota
app.use('/tasks', routerTasks); 

// não remova esse endpoint, e para o avaliador funcionar

app.listen(port, () => console.log(`Estou aqui na porta ${port}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
   response.send('Olá');
});
