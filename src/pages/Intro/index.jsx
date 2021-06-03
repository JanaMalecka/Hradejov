import React from 'react';
import './style.css';
import hradejovUrl from './img/hradejov.png';

const Intro = () => {
  return (
    <div className="container">
      <div className="intro">
        <h1 className="intro-h1">Hradějov</h1>
        {/* <div className="hradejov"></div> */}
        {/*  <figure>
          <div className="image"> */}
        <img
          className="img-hradejov"
          src={hradejovUrl}
          alt="obrázek s hlavními postavičkami Hradějova"
        />
        {/*   </div>
        </figure> */}
        <p className="first">POHÁDKOVÝ SVĚT MEZI NÁMI</p>
        <p>Kupte si herní plán v podobě knihy a vyražte si hrát do města!</p>
        <p>Hry v reálném prostředí města Brna pro děti ve věku 4–10 </p>
        <div className="btn-wrapper">
          <button className="btn btn-buy">Koupit hru</button>
        </div>
      </div>
    </div>
  );
};
export default Intro;
