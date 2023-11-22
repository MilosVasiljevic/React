import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";

function Game() {
  return (
    <div>
      Registration
      <Link to="/">Home</Link>
    </div>
  );
}

export default Game;
