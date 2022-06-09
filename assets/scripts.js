var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;
const numero = document.querySelector('.numero')
const botaomais = document.getElementById('adicionar')
const botaomenos = document.getElementById('subtrair')
document.getElementById("adicionar").addEventListener("click", function(){ 
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber === 10){
        botaomais.disabled = true
    }
});

document.getElementById("subtrair").addEventListener("click", function(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0){
        numero.style.color = 'red'
        numero.style.fontWeight = 'bold'
    }
    if(currentNumber === -10){
        botaomenos.disabled = true
    }
});

if (numero === '10'){
    botao.disabled = true
}








