import React from 'react';
import './style.css';
import hradejovUrl from './img/hradejov.png';

const Intro = () => {
  return (
    <div className="container">
      <div className="intro">
        <h1>Hradějov</h1>
        {/* <div className="hradejov"></div> */}
        <img
          className="hradejov"
          src={hradejovUrl}
          alt="obrázek s hlavními postavičkami Hradějova"
        />
        <p>Pohádkový svět mezi námi</p>
        <p>Kupte si herní plán v podobě knihy a vyražte si hrát do města!</p>
        <p>Hry v reálném prostředí města Brna pro děti ve věku 4–10 </p>
        <button>Koupit hru</button>
      </div>
    </div>
  );
};
export default Intro;
