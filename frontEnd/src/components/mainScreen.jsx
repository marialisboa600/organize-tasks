import './mainScreen.css'
import React, { useState, useContext,useEffect}  from 'react';
import ModalTask from './modal';
import TaskProvider from '../context/taskContext';
import Cards from './cards';
import { insert} from '../fetch/routes';

function MainScreen() {
  const { saveDadosTask,dadosTask ,setDadosTask } = useContext(TaskProvider);
  const [dadoState, setDadosObjTask] = useState();

useEffect(() => {
  fetch('http://localhost:3001/tasks')
  .then((data) => data.json())
  .then((task) => setDadosTask(task))
  .catch((e) => {
    console.log(e)
  })
},[]) 
  
const submitTask = async (e) => {
  const select = document.getElementById('status');
  e.preventDefault();
  const dados = {
  titulo: document.getElementById('titulo').value,
          status: select.options[select.selectedIndex].value,
          descricao: document.getElementById('descricao').value,
}
setTask(dados)
insert(dados,saveDadosTask);
}

const setTask = (dados)=>{
  setDadosObjTask({...dadoState,
    titulo:dados.titulo,
    status:dados.status,
    descricao:dados.descricao});
}

const retornocard = (status)=>{
  return dadosTask.map((item) => {
  if(status === item.status){
    return <Cards  
      id={item._id} 
      key={item._id} 
      titulo = {item.titulo} 
      status = {item.status}  
      descricao = {item.descricao}> 
      </Cards>
  }
  })     
}

  //https://www.youtube.com/watch?v=y8ckoDFXdVE

  const removeTask = (index) => {
    const tasks = this.state.tasks.slice();
    tasks.splice(index, 1);
    this.setState({tasks}); 
  }

  return (
    <div className="container-fluid body ">
      <h1 className="tituloApp">Organize Tasks</h1>
      <div className="row">
        <div className="col bg-black">
          <div className="bg-warning titleCenter" id="pendente">
            Pendente
        
            </div>
          {retornocard('pendente')}
          <ModalTask  submitTarefa={submitTask}  removeTarefa ={removeTask}/>
        </div>
        <div className="col">
          <div className="colorColun titleCenter bg-info ">
            Em andamento
            </div>
          {retornocard('em-andamento')}
          <ModalTask submitTarefa={submitTask} />
        </div>
        <div className="col">
          <div className="colorColun titleCenter bg-success">
            Pronto
            </div>
          {retornocard('pronto')}
          <ModalTask submitTarefa={submitTask}/>
        </div>
      </div>
    </div>
  );
}
export default MainScreen;
