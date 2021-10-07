var listElement = document.querySelector('#app ul');

var inputElement = document.querySelector('#app input');

var buttonElement = document.querySelector('#app button');

var toDo = JSON.parse(localStorage.getItem('lista_todos')) || [];

function renderToDo() {

    listElement.innerHTML = '';

    for (toDos of toDo) {
        console.log(toDos);

        var toDoElement = document.createElement('li');
        var toDoText = document.createTextNode(toDos);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var posicao = toDo.indexOf(toDos);

        linkElement.setAttribute('onclick', 'deletarToDo(' + posicao + ')');

        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);

        toDoElement.appendChild(toDoText);
        toDoElement.appendChild(linkElement);
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
        salvarDados();
    }

}

buttonElement.onclick = adicionarToDo;

function deletarToDo(posicao) {
    toDo.splice(posicao, 1);
    renderToDo();
    salvarDados();
}

function salvarDados() {

    localStorage.setItem('lista_todos', JSON.stringify(toDo));
}



