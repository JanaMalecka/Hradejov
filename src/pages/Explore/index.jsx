import React from 'react';
import './style.css';

const Explore = () => {
  return (
    <div className="container">
      <h1>Poznejte své město</h1>
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
      <p>Prozkoumej zajímavá místa (ikonka - mesto)</p>
      <p>Hraj za pomoci knihy / ikonka - kniha</p>
      <p>Vyřeš úkoly, budeš odměněn (ikonka – dárek – balíček)</p>
      <div className="btn-wrapper">
        <button className="btn btn-choose">
          Vyberte si svoji knihu (odklik do e-shopu)
        </button>
      </div>
    </div>
  );
};

export default Explore;
