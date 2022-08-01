const required = (minLenght) => (value) => value?.lenght > minLenght;

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
}
