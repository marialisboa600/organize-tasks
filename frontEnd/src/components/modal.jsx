import { Button, ModalHeader, ModalBody, Modal, ModalFooter } from 'bootstrap';

import ButtonAddTask from './buttonAddTask';

function ModalTask({submitTarefa}) {
  return (
    <div>
      <ButtonAddTask />
      <div 
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="exampleModalLabel"
              >
                Adicionar
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form className="modal-body">
              <div className="mb-3">
                <input
                  type="text"
                  name="titulo"
                  className="form-control"
                  id="titulo"
                  placeholder="Título"
                  
                />
              </div>
              <select
                name="status"
                id="status"
                className="form-select"
                aria-label="Default select example"
              >
                <option value="pendente">Pendente</option>
                <option value="em-andamento">Em andamento</option>
                <option value="pronto">Pronto</option>
              </select>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  name="descricao"
                  id="descricao"
                  rows="3"
                  placeholder="Descrição"
                />
              </div>
            </form>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                id="criar-tarefa"
                onClick={submitTarefa}
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalTask;
