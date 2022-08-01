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
            return regrasDeValidacao[chave](window[chave]);
    })
    ){
        onSuccess();
    }
}

function handleChange(id, value) {
    window[id] = value;
}

function handleSubmit() {
    /*if(required(nameValue) && required(emailValue)) {
        console.log("Submit");
    }else{
        alert("Error");
    }*/
    console.log({ nameValue, emailValue });
}

