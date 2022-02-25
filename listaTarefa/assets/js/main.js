const novaTarefa = document.querySelector('.nova-tarefa');
const btnTarefa =  document.querySelector('.btn-add-tarefa');
const listaTarefas = document.querySelector('.lista-tarefas')

function criaLi() {
    const li = document.createElement('li');
    return li;
}

novaTarefa.addEventListener('keypress', function(e) {
    if(e.keyCode === 13){
        console.log('ENTER precionado')
        if(!novaTarefa.value) return;
        criaTarefa(novaTarefa.value);
        
    };
})

function limpaInput() {
    novaTarefa.value = '';
    novaTarefa.focus();
};

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    listaTarefas.appendChild(li);
    limpaInput();
    botaoApagar(li);
    salvaTarefas();
};

function botaoApagar(li) {
    li.innerText += ' '
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    //botaoApagar.classList.add('apagar')
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'apague essa tarefa')
    li.appendChild(botaoApagar);
};

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('apagar')) {
        //console.log(el.parentElement);
        el.parentElement.remove();
        salvaTarefas();
    };
});

btnTarefa.addEventListener('click', function(){
    if (!novaTarefa.value) return;
    criaTarefa(novaTarefa.value)
});

function salvaTarefas() {
    const liTarefas = listaTarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
        
    };
    
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('Tarefas', tarefasJSON)
};

function listaTarefasSalvas() {
    const tarefas = localStorage.getItem('Tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    
    for(let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    };
};
listaTarefasSalvas();