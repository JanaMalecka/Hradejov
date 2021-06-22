import "./style.css";
import React, { useState } from "react";
import obrazek1 from "./img/godel.gif";
import ruzova2 from "./img/ruzova2.svg";
import Hra from "./components/Hra/hra";
import { Link } from "react-router-dom";

const GamePage = () => (
  <div className="game">
    <div className="container">
      <Link to="/" className="link">
        Hradějov
      </Link>
      <header>
        <img src={obrazek1} className="kurt" />
        {/*    <img src={obrazek} /> */}
        <h1 className="h1godel">UKÁZKOVÁ HRA UTRHČÍSLO</h1>
      </header>
      <main>
        <img src={ruzova2} className="bounce-in-top" />

        <Hra />
        <div className="mistoSodpovedi">
          <a href="">Nahoru</a>
        </div>
      </main>
      <footer id="gameFooter">
        <button className="btnFooter">
          <h1>2</h1></button>
      </footer>
    </div>
  </div>
);

export default GamePage;
