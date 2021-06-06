import React, { useState } from 'react';
import './style.css';
import hradejovUrl from './img/hradejov.jpg';
import Button from '../../components/Button';

const Intro = () => {
  return (
    <div className="container">
      <div className="intro">
        <h1 className="title title-intro">Hradějov</h1>
        <img
          className="img-hradejov"
          src={hradejovUrl}
          alt="obrázek s hlavními postavičkami Hradějova"
        />
        <p className="first">POHÁDKOVÝ SVĚT MEZI NÁMI</p>
        <p className="second">
          Kupte si herní plán v podobě knihy a vyražte si hrát do města!
        </p>
        <p className="last">
          Hry v reálném prostředí města Brna pro děti ve věku 4–10{' '}
        </p>
        <Button link="#buy" text="Koupit hru" />
      </div>
    </div>
  );
};
export default Intro;
