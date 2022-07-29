
obterPokemons();

let resultado;

async function obterPokemons() {
    const listaPokemons = document.getElementById('lista-pokemons');

    const loading = document.createElement('li');
    loading.innerText = 'Carregando ...';
    loading.id = 'loading';
    listaPokemons.appendChild(loading);

    resultado = await fetch("https://pokeapi.co/api/v2/pokemon");
    const { count, results } = await resultado.json();

    loading.remove();

    document.getElementById("count").innerText = `Count: ${count}`;
    results.forEach(({ name }) => {
        const item = document.createElement("li");
        item.innerText = name;
        listaPokemons.appendChild(item);
    });
}

async function obterProxPokemons(){
    const listaPokemons = document.getElementById('lista-pokemons');

    const loading = document.createElement('li');
    
    const resultado = await fetch(resultado.next);
    const { count, results } = await resultado.json();

    loading.remove();

    document.getElementById("count").innerText = `Count: ${count}`;
    results.forEach(({ name }) => {
        const item = document.createElement("li");
        item.innerText = name;
        listaPokemons.appendChild(item);
    });
}

async function obterAntPokemons(){
    obterPokemons();
}
