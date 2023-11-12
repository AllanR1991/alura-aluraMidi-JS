//Testando o JS para verficar se ele está funcional
//alert('Olá mundo');

//document representa todo o documento html

//  Como seleciona um tipo especifico de um elemento
//  listaDeTeclas = document.querySelectorAll('input[type=button]')



//  Obtendo um lista de teclas
const listaDeTeclas = document.querySelectorAll('.tecla');

//  Função que toca som recebe como parametro um 
function tocaSom (seletorAudio) {
    idSeletoAudio = `#som_${seletorAudio.toLowerCase()}`;
    elemento =  document.querySelector(`${idSeletoAudio}`);
    
    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    } 
    else{
        alert('Elemento não encontrado ou seletor inválido')
    }
}

listaDeTeclas.forEach(tecla => {

    //  O onclick deve ser utilizado quando atribuimos uma função diretamente a um elemento HTML.
    
    //  Aqui estamos atribuindo a cada tecla um EventoListener to tipo click onde ao clicar na tecla será execultado a função toca som
    tecla.addEventListener("click", function () {
        instrumento = tecla.classList[1];
        tocaSom(instrumento)
    })
    
    
    // Todo evento acionado possui uma propriaedade event que contem informações sobre o evento acionado, o nome do parametro pode ser qualquer um de sua escolha porem é muito usado e/event.
    tecla.onkeydown = function (event) {
        // Através do parametro event conseguimos saber qual tecla foi presionada
        // Abaixo possui um Operador ternario para verificar se a condição é verdadeira ou falsa.
        (event.keyCode === 32) || (event.keyCode === 13) ? 
        tecla.classList.add('ativa') : null
    }
    
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }



});




/*
    ************************************************************************************************
                                        Outra solução possivel
*/

/*
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

function tocaSom(idElementoAudio){
    document.querySelectorAll(idElementoAudio).play();
}

while (contador < listaDeTeclas.length ){
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som${instrumento}`
    tecla.onclick = function () {
        tocaSom(idAudio)
    };
    contador = contador + 1;
}
*/


/*
    ************************************************************************************************ 
                                    Péssima maneira de codificar
*/

/*

function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}
// atribuindo uma função ao onclick sem que ela seja invocada automaticamente.
document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomClap(){
    document.querySelector("#som_tecla_clap").play();
}

document.querySelector('.tecla_clap').onclick = tocaSomClap;


function tocaSomTim(){
    document.querySelector("#som_tecla_tim").play();
}

document.querySelector('.tecla_tim').onclick = tocaSomTim;

function tocaSomPuff(){
    document.querySelector("#som_tecla_puff").play();
}

document.querySelector('.tecla_puff').onclick = tocaSomPuff;

function tocaSomSplash(){
    document.querySelector("#som_tecla_splash").play();
}

document.querySelector('.tecla_splash').onclick = tocaSomSplash;

function tocaSomToim(){
    document.querySelector("#som_tecla_toim").play();
}

document.querySelector('.tecla_toim').onclick = tocaSomToim;

function tocaSomPsh(){
    document.querySelector("#som_tecla_psh").play();
}

document.querySelector('.tecla_psh').onclick = tocaSomPsh;


function tocaSomTic(){
    document.querySelector("#som_tecla_tic").play();
}

document.querySelector('.tecla_tic').onclick = tocaSomTic;

function tocaSomTom(){
    document.querySelector("#som_tecla_tom").play();
}

document.querySelector('.tecla_tom').onclick = tocaSomTom;
*/


