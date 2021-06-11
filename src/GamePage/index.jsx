import './style.css';
import React, { useState } from 'react';
import obrazek1 from './img/godel.gif';
import ruzova2 from './img/ruzova2.svg';
import Hra from './components/Hra/hra';
import { Link } from 'react-router-dom';

const GamePage = () => (
  <div className="game">
    <Link to="/" className="link">Hradějov</Link>
   
    <div className="container">
     <header>
        <img src={obrazek1} className="kurt" />
        {/*    <img src={obrazek} /> */}
        <h1>UKÁZKOVÁ HRA UTRHČÍSLO</h1>
      </header>
      <main>
        <img src={ruzova2} className="bounce-in-top" />

        <Hra />
     <div className="mistoSodpovedi">
      <a href="">Nahoru</a> 
      </div>
      </main>
      <footer></footer>
    </div>
  </div>
);

export default GamePage;
