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

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

  <div>
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
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <footer>kraj@</footer>
  </div>




);

