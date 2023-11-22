import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";

function Game() {
    return (
        <div>
            <p>Error 404</p>
            <Link to="/">return Home</Link>
        </div>
    );
}

export default Game;
