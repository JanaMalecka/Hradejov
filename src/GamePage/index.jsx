
import './style.css';
import React, { useState } from 'react';
import obrazek1 from './img/godel.png'
import ruzova2 from  './img/ruzova2.svg'
import Hra from './components/Hra/hra'

const GamePage = () => (
  <>
  <a href="">
                Domů
              </a>
  <div className="container">
  <header>
  <img src={obrazek1} className="kurt" />
{/*    <img src={obrazek} /> */}
    <h1>ZKOUŠKOVA HRA
      
      UTRHCISLO
    </h1>
  </header>
  <main>
  <img src={ruzova2} className="bounce-in-top" />

<Hra />
  </main>
  <a href="">
                Domů
              </a>
  <footer>
   
  </footer>
</div>
</>
);

export default GamePage;