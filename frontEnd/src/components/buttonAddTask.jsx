import React from 'react';

function ButtonAddTask() {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        + Adicionar tarefa
      </button>
    </div>
  );
}

export default ButtonAddTask;
