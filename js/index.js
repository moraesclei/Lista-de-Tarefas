const listaTarefas = document.querySelector('#listaTarefas');
const caixaTexto = document.querySelector('#caixaDeTexto');
const botaoAdicionar = document.querySelector('#botaoAdicionar');

//aqui é onde acontece o manipulador de eventos
botaoAdicionar.addEventListener('click', function () {
    const textoDaTarefa = caixaTexto.value;
    caixaTexto.value = '';
    listaTarefas.appendChild(adicionaTarefa(textoDaTarefa));
    caixaTexto.focus();//faz com que o cursor fique piscando dentro do input
});

function adicionaTarefa(textoDaTarefa) {
    const elementoLI = document.createElement('li');
    const elementoSPAN = document.createElement('span');

    elementoSPAN.setAttribute('id', 'tarefa');
    elementoSPAN.textContent = textoDaTarefa;
    
    elementoLI.className = 'naoRealizada';
    elementoLI.appendChild(elementoSPAN);
    elementoLI.appendChild(adicionaBotaoRemover());

    //Manipulador de eventos que sempre que clicar na lista queremos que altere o estilo dela
    elementoSPAN.addEventListener('click', function(){
        if(this.id === 'tarefa'){
            if(this.parentNode.className === 'naoRealizada'){
                this.parentNode.className = 'realizada'
            }else{
                this.parentNode.className = 'naoRealizada'
            }
        }
    });
    return elementoLI;
}

function adicionaBotaoRemover(){
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = '✘'
    botaoRemover.className = 'remover';
        

    botaoRemover.addEventListener('click', function(){
        listaTarefas.removeChild(this.parentNode);
        caixaTexto.focus();//faz com que o cursor fique piscando dentro do input
        }
    );

    return botaoRemover;
}