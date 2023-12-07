
import './App.css';
import { useReducer } from 'react';



const inicijalnaVrednost = ["1","2"];



function reducerFunkcija (tasks, action) {

    console.log(tasks.length, action);

    const duzina = tasks.length;

    switch (action.type) {

        case 'add': {
            return [...tasks, duzina + 1];
        }

        case 'remove': {
            tasks.pop();
            return [...tasks];
        }

    }

}





export default function Context() {

    const [novaVrednost, dispatch] = useReducer( reducerFunkcija, inicijalnaVrednost);

    return (
        <div>
            <p>Reducer</p>
            <p>{novaVrednost}</p>

            <button onClick={() => {
                dispatch({
                    type: 'add'
                });
            }}>
            Ubaci novu vrednost
            </button>

            <button onClick={() => {
                dispatch({
                    type: 'remove'
                });
            }}>
            Skloni zadnju vrednost
            </button>

        </div>
    );
}


