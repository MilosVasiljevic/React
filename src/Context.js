
import './App.css';
import { useReducer, useState } from 'react';
import { createContext ,  useContext } from 'react';

import  {reducerFunkcija} from './Context2';

const inicijalnaVrednost = ["1","2"];


const Vrednost = createContext("Kontekst");

function Kontekst() {

    const prosledjenaVrednost = useContext(Vrednost);

    return (
        <p>
            {prosledjenaVrednost}
        </p>
    )
}


function Kontekst2() {

    const [user, setUser ] = useState("Kontekst 2");

    return (
        <Vrednost.Provider value={user}>
            {user}
        </Vrednost.Provider>
    );

}




export default function Context() {

    const [novaVrednost, dispatch] = useReducer( reducerFunkcija, inicijalnaVrednost);

    function MalaKomponenta() {

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
   

    return (
        <>
            <MalaKomponenta></MalaKomponenta>
            <Kontekst></Kontekst>
            <Kontekst2></Kontekst2>
        </>
        
    );

    
}


