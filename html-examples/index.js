

let resultado = await fetch("https://pokeapi.co/api/v2/pokemon");
obterPokemons('');
let pokemons = [];
const listaPokemons = document.getElementById('lista-pokemons');

setInterval(() => ({
    pokemons.innerHTML = "";
    pokemons.forEach(({ nome }) => ({
        const item = document.createElement("li");
        item.innerText = nome;
        listaPokemons.appendChild(item);
    }))
}), 500);

async function obterPokemons(movimento) {
    console.log("Start");

    const loading = document.createElement('li');
    loading.innerText = 'Carregando ...';
    loading.id = 'loading';
    listaPokemons.appendChild(loading);


    const { count, results, next, previus } = await resultado.json();
    resultado = await fetch(next);

    loading.remove();

    document.getElementById("count").innerText = `Count: ${count}`;
    results.forEach(({ name }) => {
        const item = document.createElement("li");
        item.innerText = name;
        listaPokemons.appendChild(item);
    });
}
