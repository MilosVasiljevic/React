import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import Game from './Game';
import NoPage from './NoPage';
import Registration from './Registration';
import Tic from './Tic';
import Filter from './Filter';
import Layout from './Layout';
import Test from './Test';
import Refs from './Refs';
import Context from './Context';
import Users from './Users';

import Testiranje from './Testiranje';

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

  <div>
    <div class="cont">

   
      <h1>Test website</h1>
      {/* <Link to="/game">Game</Link> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home color="red" />} />
            <Route path="/game" element={<Game />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/tic" element={<Tic />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/context" element={<Context />} />
            <Route path="/test" element={<Test />} />
            <Route path="/refs" element={<Refs />} />
            <Route path="/testiranje" element={<Testiranje />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>

    <footer>kraj@</footer>

  </div>




);

