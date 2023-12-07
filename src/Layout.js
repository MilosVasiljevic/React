import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/game">Game</Link>
                    </li>
                    <li>
                        <Link to="/registration">Registration</Link>
                    </li>
                    <li>
                        <Link to="/tic">Tic Tac Toe</Link>
                    </li>
                    <li>
                        <Link to="/filter">Filter</Link>
                    </li>
                    <li>
                        <Link to="/context">Context i Reducer</Link>
                    </li>
                    <li>
                        <Link to="/test">Test</Link>
                    </li>
                    <li>
                        <Link to="/refs">Refs</Link>
                    </li>
                    <li>
                        <Link to="/testiranje">Testiranje</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
