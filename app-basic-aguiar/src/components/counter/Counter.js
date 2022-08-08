import { useEffect, useState } from "react";
import * as S from "./Counter.style";

// useEffect e useStates sáo Hooks
// Hooks sao funcoes pre-definidas em React
// useEffect: é uma funcao que retorna um estado reativo
// useState: é uma funcao que determina oq fazer quando alguma coisa mudar

function Counter(){
    const [count, setCount] = useState(0);
    const [active, setActive] = useState(false);

    const start = () =>  {
        setActive(true);
    }

    const stop = () =>  {
        setActive(false);
    }

    // Quando alguma das dependencias que estao declaradas no array mudar, a funcao sera sera executada
    // nesse caso, ela vai ser chamada sempre que active mudar
    useEffect(() => {
        let id;
        if(active){
            id = setInterval(() => setCount(prev => prev + 1), 1000);
        }
        return () => clearInterval(id);
    }, [active]);


    return (
        <S.Counter>
            <h1>{count}</h1>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </S.Counter>
    );
}

export default Counter;