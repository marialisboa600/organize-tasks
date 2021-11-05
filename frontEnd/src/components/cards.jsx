import React from 'react';
import PropTypes from 'prop-types';

function Cards({ id, titulo, status, descricao }) {
  
  return (
    <div className="card text-dark bg-white mb-3">
      <div className="card-header">{titulo}</div>
      <div className="card-body">
        <p className="card-text">{descricao}</p>
      </div>
      <div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-primary me-md-2" type="button">Editar</button>
  <button class="btn btn-primary" type="button" >Excluir</button>
</div>
            </div>
    </div>
  );
}

export default Cards;
Cards.propTypes = {
  titulo: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
};
