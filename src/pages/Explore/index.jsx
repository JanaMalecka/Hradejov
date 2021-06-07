import React from 'react';
import './style.css';

import buildingBlueUrl from './img/buildingBlue.png';
import book2Url from './img/book2.png';
import giftPinkUrl from './img/giftPink.png';
import Button from '../../components/Button';

const Explore = () => {
  return (
    <div className="container">
      <h1 className="title">Poznejte své město</h1>
      <p>
        V Brně se toho hodně děje. Staví se nové domy, opravují se ty staré,
        rodiče pospíchají do práce a děti do školky či školy. Ale žijí tu i jiné
        bytosti než malí a velcí Brňáci! A ty si nejraději hrají! A přímo v
        ulicích!
      </p>
      <p>
        Že jste ještě neslyšeli o pohádkovém světě Brna? Opravdu existuje!
        Všelijaká rozpustilá stvoření tu pobíhají, postávají a polehávají,
        objevují se a mizí. Nejvyšší čas se seznámit!
      </p>
      <p>
        Utrhčíslo, Omylem, Puzzolente, Pimprlín a Pimprlína, Alene budou
        dozajista rádi, když jim pomůžete s jejich hrami a napravíte jejich
        vylomeniny
      </p>
      <p>
        Jednotlivé hry mají původ v pohádce, odehrávají se v ulicích Brna, děti
        se orientují za pomoci map, plní úkoly, které je dovedou k cíli. Odměna
        je nemine. Stačí zakoupit herní plán v podobě knihy a jít se bavit do
        ulic!
      </p>
      <div className="container--columns">
        <div className="column-first">
          <p>Prozkoumej zajímavá místa</p>
          <img
            className="icon-building"
            src={buildingBlueUrl}
            alt="ikonka budov"
          />
        </div>
        <div className="column-second">
          <p>Hraj za pomoci knihy</p>
          <img
            className="icon-book icon-book--bigger"
            src={book2Url}
            alt="ikonka knihy"
          />
        </div>
        <div className="column-third">
          <p>Vyřeš úkoly, budeš odměněn</p>
          <img
            className="icon-gift last"
            src={giftPinkUrl}
            alt="ikonka dárku"
          />
        </div>
      </div>
      <Button link="#buy" text="Koupit hru" />
    </div>
  );
};

export default Explore;
