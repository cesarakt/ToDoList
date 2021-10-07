var listElement = document.querySelector('#app ul');

var inputElement = document.querySelector('#app input');

var buttonElement = document.querySelector('#app button');

var toDo = [
    'ir ao mercado',
    'Estudar JavaScript',
    'Pagar conta de Luz'

];

function renderToDo() {

    listElement.innerHTML = '';

    for (toDos of toDo) {
        console.log(toDos);

        var toDoElement = document.createElement('li');
        var toDoText = document.createTextNode(toDos);

        toDoElement.appendChild(toDoText);
        listElement.appendChild(toDoElement);


    }
}

renderToDo();

function adicionarToDo() {

    if (inputElement.value == '') {
        alert('Digite alguma tarefa!')
        return false
    } else {
        var toDosText = inputElement.value;
        toDo.push(toDosText);
        inputElement.value = '';
        renderToDo();
    }

}

buttonElement.onclick = adicionarToDo;


