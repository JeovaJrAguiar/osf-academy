const required = (minLenght) => (value) => value?.lenght > minLenght;

var nameValue = "";
var emailValue = "";

const regrasDeValidacao = {
    nameValue: required(2),//posso ter varias regras de validacao dentro de cada atributo
    emailValue: required(5),
};

function validador(onSuccess){
    if(
        Object.keys(regrasDeValidacao).every((chave) => {
            const validar = regrasDeValidacao[chave];
            const valor = window[chave];
            return validar(valor);
    })
    ){
        onSuccess();
    }
}

function handleChange(id, value) {
    window[id] = value;
}

function handleSubmit() {
    console.log({ nameValue, emailValue });
}

