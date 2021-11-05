//https://pt.stackoverflow.com/questions/455083/react-fetch-post
const insert =  async (dados,saveDadosTask) => {
   console.log(dados)
   const requestOptions = {
    method: 'POST',
    body: JSON.stringify(dados),
    headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }),
  };

     await   fetch('http://localhost:3001/tasks', requestOptions)
        .then((data) => data.json())
        .then((task) => saveDadosTask(task))
        .catch((e) => {
          console.log(e)
        })
    
}

const update =  async (id,dados,saveDadosTask) => {
    console.log(dados)
    const requestOptions = {
     method: 'PUT',
     body: JSON.stringify(dados),
     headers: new Headers({
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     }),
   };
 
      await   fetch('http://localhost:3001/tasks'+id, requestOptions)
         .then((data) => data.json())
         .then((task) => saveDadosTask(task))
         .catch((e) => {
           console.log(e)
         })
     
 }

 const remove =  async (id,removeId) => {
    console.log(id)
    const requestOptions = {
     method: 'DELETE',
     headers: new Headers({
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     }),
   };
 
      await   fetch('http://localhost:3001/tasks/'+id, requestOptions)
         .then((data) => removeId(id))
         .catch((e) => {
           console.log(e)
         })
     
 }



module.exports = {insert, update, remove};