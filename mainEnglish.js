const btnSave = document.querySelector("#form button[type=submit]");
const inputText = document.getElementById("texto");
const list = document.getElementById("task-list");
let tasks = [];


const addNewTask = (text) => {
  let task = {
    text,
    done: false
  }
  tasks.push(task);
  
  return task;
}

const showTask = (task) => {
  let li = document.createElement("li");
  
  li.innerHTML = `
  <input type="checkbox" id="check_2">
  <label for="check_2">${text}</label>
  <i class="material-icons">delete</i>
  `;
  
  list.appendChild(li);
  
}


const onBtnSaveOnClick = (event) => {

  event.preventDefault();
  
  let text = inputText.value;
  
  let task = addNewTask(text);
  showTask(task);
}

btnSave.addEventListener('click', onBtnSaveOnClick)

//  1- Capturar o texto digitado no campo
//Função addNewTask
//Recebe um texto como parametro e adiciona na lista(array) de tarefas



  // 2- Criar um objeto tarefa{text:'texto digitado', feita: false}
//let task = {
 // text,
  //done: false
//}
  // 3 - Adicionar esse objeto no array de tarefas;
  //tasks.push(task);

  // 4 - Adicionar a tarefa na DOM
  //4.1 Criar nova li

  //4.2 Adicionar o conteudo li;
  //li.innerHTML = `
//<input type="checkbox" id="check_2">
//<label for="check_2">${text}</label>
//<i class="material-icons">delete</i>
//`;
  //4.3 adicionar o novo li na lista
  //list.appendChild(li);

//Forma 1, deselegante
//btnSave.onclick = onBtnSaveOnClick;
//Forma 2, mais elegante



