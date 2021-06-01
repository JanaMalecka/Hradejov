import React from 'react';
import './style.css';

const Whyplay = () => {
  return (
    <div className="container">
      <h1>Proč hrát naše hry</h1>
      <p>
        Zábava Jak zabavit své děti a vyplnit jejich volný čas řeší mnoho
        rodičů. My vám nabízíme zábavný způsob, který dětem přinese zážitky a
        dobrodružství přímo v jejich městě. Ale i vám.
      </p>
      <p>
        Poznání Jednotlivé knihy s herním plánem jsou zasazeny do pohádkového
        příběhu, který dětem zprostředkuje informace o městě Brně. Za pomoci
        mapy se děti naučí orientovat v prostoru, hry prohloubí jejich
        pozorovací i jazykové schopnosti a plnění jednotlivých úkolů donutí děti
        logicky uvažovat.
      </p>
      <p>
        Pohyb Kdo by nechtěl, aby se jeho dítě více pohybovalo, než aby bylo
        baveno pasivně? Přidanou hodnotou našich her je pohyb ve městě, parcích,
        promenádách, hřištích, náměstích, jednoduše v ulicích Brna.
      </p>
      <div className="btn-wrapper">
        <button className="btn btn-choose-2nd">
          Vyberte si svoji knihu (odklik do eshopu)
        </button>
      </div>
    </div>
  );
};

export default Whyplay;
