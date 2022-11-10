const lista = document.getElementById('task-list');


//Com o elemento em mãos podemos manipular o conteúdo, aparência e comportamento

//Manipulação de conteúdo
//lista.innerHTML: Conteúdo HTML

//lista.innerHTML = "<li>Adicione uma tarefa!</li>"

//lista.innerHTML = lista.innerHTML + `	<li id="task_1">
//<input type="checkbox" id="check_1">
//<label for="check_1">TESTE</label>
//<i class="material-icons">delete</i>
//</li>`

//lista.appendChild(): Função para adicionar elemento


//lista.removeChild(): Função que remove um elemento

//let li1 = document.getElementById('task_1')
//lista.removeChild(li1)

//Query Selector - seleciona o primeiro elemento de classe, id etc

const element = document.querySelector('#task-list li');
const element1 = document.querySelector('#task-list li:nth-child(3)');

const element2 = document.querySelectorAll('#task-list li');

const form = document.querySelector('#form');
const button = document.querySelector('#form button[type=submit]');
//button.remove()
//button.style.background = 'red';
button.style = "background-color: rgba(0, 0, 0, 0.5)";