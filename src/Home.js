import './App.css';
import {  Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, createContext, useContext, useRef, useReducer } from "react";




function Home(props) {


    const navigate = useNavigate()

    function handleClick() {
        if (true) {
            navigate("/game");
        }
    }

    const x = 5;
    let text = "Goodbye";
    if (x < 10) {
        text = "Hello";
    }

    function Komponenta() {
        return <h2>Ja sam ubacen iz komponente. Huehuehue.</h2>;
    }

    //const [color, setColor] = useState("red"); // use state init can be defined here

    function FavoriteColor() {


        const [color, setColor] = useState("red"); // use state init

        const [car, setCar] = useState({
            brand: "Ford",
            model: "Mustang",
            year: "1964",
            color: "red"
        });  // use state as object

        const updateColor = () => {
            setCar(previousState => {
                return { ...previousState, color: "blue" }
            });
        } // function that change prop of object


        // change useState in function
        return <div>
            <p>My favorite color is {color}!</p>
            <button type="button" onClick={() => setColor("blue")}>Blue</button>
            <h1>My {car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}.
            </p>
            <button type="button" onClick={updateColor}>Change color of car</button>
        </div>
    }


    function Timer() {

        const [count, setCount] = useState(0);

        //Runs on every render
        useEffect(() => {
            setTimeout(() => {
                setCount((count) => count + 1);
            }, 1000);
        });


        // Runs only on the first render
        useEffect(() => {
            setTimeout(() => {
                setCount((count) => count + 1);
            }, 1000);
        }, []); 


        // Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
        // To clear the timer, we had to name it.
        useEffect(() => {
            let timer = setTimeout(() => {
                setCount((count) => count + 1);
            }, 1000);

            return () => clearTimeout(timer)
        }, []); 




        return <h1>I've rendered {count} times!</h1>;
    }


    function Counter() {

        const [count, setCount] = useState(0);
        const [calculation, setCalculation] = useState(0);

        useEffect(() => {
            setCalculation(() => count * 2);
        }, [count]); // <- add the count variable here, Hook that is dependent on a variable. If the count variable updates, the effect will run again:

        return (
            <>
                <p>Count: {count}</p>
                <button onClick={() => setCount((c) => c + 1)}>+</button>
                <p>Calculation: {calculation}</p>
            </>
        );

    }



    const UserContext = createContext(); //React Context is a way to manage state globally.


    function Component1() {
        const [user, setUser] = useState("Jesse Hall");

        return (
            <UserContext.Provider value={user}>
                <h1>{`Hello ${user}!`}</h1>
                <Component2 />
            </UserContext.Provider>
        );
    }

    // function Component1() {
    //     const [user, setUser] = userState("Jesse Hall");

    //     return (
    //         <UserContext.Provider value={user}>
    //             <h1>{`Hello $(user)!`}</h1>
    //             <Component2 />
    //         <UserContext.Provider/>
    //     );
    // }


    function Component2() {
        return (
            <>
                <Component3 />
            </>
        );
    }

    function Component3() {
        return (
            <>
                <Component4 />
            </>
        );
    }

    function Component4() {
        return (
            <>
                <Component5 />
            </>
        );
    }

    function Component5() {
        const user = useContext(UserContext);

        return (
            <>
                <h2>{`Hello ${user} again!`}</h2>
            </>
        );
    }


    function Ref() {

        const [inputValue, setInputValue] = useState("");
        const count = useRef(0);

        useEffect(() => {
            count.current = count.current + 1;
        });

        // change state of element
        const inputElement = useRef();

        const focusInput = () => {
            inputElement.current.focus();
        };


        //The useRef Hook can also be used to keep track of previous state values.
        const previousInputValue = useRef("");
        useEffect(() => {
            previousInputValue.current = inputValue;
        }, [inputValue]);

        return (
            <>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    ref={inputElement}
                />
                <h1>Render Count: {count.current}</h1>
                <button onClick={focusInput}>Focus Input</button>
                <h2>Current Value: {inputValue}</h2>
                <h2>Previous Value: {previousInputValue.current}</h2>
            </>
        );
    }


    // useReducer
    const initialTodos = [
        {
            id: 1,
            title: "Todo 1",
            complete: false,
        },
        {
            id: 2,
            title: "Todo 2",
            complete: false,
        },
    ];

    const reducer = (state, action) => {
        switch (action.type) {
            case "COMPLETE":
                return state.map((todo) => {
                    if (todo.id === action.id) {
                        return { ...todo, complete: !todo.complete };
                    } else {
                        return todo;
                    }
                });
            default:
                return state;
        }
    };


    function Todos() {

        const [todos, dispatch] = useReducer(reducer, initialTodos);

        const handleComplete = (todo) => {
            dispatch({ type: "COMPLETE", id: todo.id });
        };

        return (
            <>
                {todos.map((todo) => (
                    <div key={todo.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={todo.complete}
                                onChange={() => handleComplete(todo)}
                            />
                            {todo.title}
                        </label>
                    </div>
                ))}
            </>
        );
    }

    // useMemo returns a memoized value and useCallback returns a memoized function.


    // show html
    return (
        <div>
            <h1>Home Page</h1> <br></br>
            <Link to="/game">Game</Link><br></br>
            <button type="button" onClick={handleClick}>
                Go to game
            </button>
            <hr></hr>
            <h1 className="myclass">React is {5 + 5} times better with JSX</h1>
            <p>{text}</p>
            <p>{(x) < 10 ? "Hello" : "Goodbye"}</p>
            <p>{props.color}</p>
            <hr></hr>
            {/* {console.log(x)} */}
            <Komponenta />
            <hr></hr>
            <FavoriteColor />
            <hr></hr>
            <Timer />
            <hr></hr>
            <Counter />
            <hr></hr>
            <Component1 />
            <hr></hr>
            <Ref />
            <hr></hr>
            <Todos />
            <br></br>
            <br></br>
            <br></br>


        </div>
    );

}

export default Home;
