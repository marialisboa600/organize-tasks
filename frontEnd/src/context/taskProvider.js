import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TaskContext from './taskContext';

function TaskProvider({ children }) {
  const [dadosTask, setDadosTask] = useState([]);

  const saveDadosTask = todo =>{
      console.log(todo);
        const dados = {
            _id: todo._id,
            titulo: todo.titulo,
            status: todo.status,
            descricao: todo.descricao,
          };
        setDadosTask([...dadosTask,dados]);
  }


  return (
    <TaskContext.Provider value={ { dadosTask, saveDadosTask,setDadosTask} }>
      { children }
    </TaskContext.Provider>
  );
}

// TaskProvider.propTypes = {
//   children: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export default TaskProvider;
