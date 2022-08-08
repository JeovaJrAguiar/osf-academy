import axios from "axios";
import { useEffect } from "react";

function ListPokemons(){
    console.log("React ")

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const obterPokemons = async () => {
            const { 
                data: {results},
            } = await axios.get("https://pokeapi.co/api/v2/pokemon");
            setPokemons(results);
        };

        obterPokemons();
    }, []);

    return (
        <ul>
            {pokemons.map(({ name }) => (
                <li key={ name }>{ name }</li>
            ))}
        </ul>
    );
}

export default ListPokemons;