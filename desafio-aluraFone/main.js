/*  
    3 - 
    Um JavaScript que percorra a lista de teclas do AluraFone, e ao clicar na tecla Enter ou Espaço, adicione a classe ativa no elemento e também resolva o momento de retirar a classe ativa do elemento.
*/

botoes = document.querySelectorAll('input[type=button]')

function exibeNumero (botao){
    inputTel = document.querySelector('input[type=tel]');
    inputTel.value = inputTel.value + botao.value;
    
}

botoes.forEach(botao => {
    botao.onclick = function () {
        exibeNumero(botao);
    }
    
    botao.onkeydown = function(event){
        (event.keyCode == 32) || (event.keyCode == 13) 
        ?
        botao.classList.add('ativa') : null
    }
    
    botao.onkeyup = function(event){
        (event.keyCode == 32) || (event.keyCode == 13) 
        ?
        botao.classList.remove('ativa') : null
    }

});
