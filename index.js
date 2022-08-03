/*const required = (minLenght) => (value) => value?.lenght > minLenght;

var nameValue = "";
var emailValue = "";

const regrasDeValidacao = {
    nameValue: required(2),//posso ter varias regras de validacao dentro de cada atributo
    emailValue: required(5),
};

function validador(onSuccess, onError) {
    if(Object.keys(regrasDeValidacao).every((chave) => {
            return regrasDeValidacao[chave](window[chave]);
    })
    ){
        onSuccess();
    }else{
        onError();
    }
}

function handleError(){
    alert('Error');
}

function handleChange(id, value) {
    window[id] = value;
}

function handleSubmit() {    
    console.log({ nameValue, emailValue });
}*/


import Calculadora from "./calculadora.js";
import Log from "./log.js";

function multiplicaDoisNumeros(){
    const num1 = document.getElementById("primeiroNum").value;
    const num2 = document.getElementById("segundoNum").value;

    console.log(num1);
    console.log(num2);
    
    const resultado = Calculadora.multiplicar( num1 , num2 );

    document.getElementById("result").innerText = `Resultado: ${resultado}`;
}

Log(Calculadora.multiplicar(3,4));

