import React from 'react';
import Button from '../../components/Button';
import './style.css';

const Whyplay = () => {
  return (
    <div className="container">
      <h1 className="title swing">Proč hrát naše hry</h1>
      <div className="container--columns">
        <div className="column-first">
          <h3 className="subtitle--small swing heading--pink">Zábava</h3>
          <p>
            Jak zabavit své děti a vyplnit jejich volný čas řeší mnoho rodičů.
            My vám nabízíme zábavný způsob, který dětem přinese zážitky a
            dobrodružství přímo v jejich městě. Ale i vám.
          </p>
        </div>
        <div className="column-second">
          <h3 className="subtitle--small swing heading--pink">Poznání</h3>
          <p>
            Jednotlivé knihy s herním plánem jsou zasazeny do pohádkového
            příběhu, který dětem zprostředkuje informace o městě Brně. Za pomoci
            mapy se děti naučí orientovat v prostoru, hry prohloubí jejich
            pozorovací i jazykové schopnosti a plnění jednotlivých úkolů donutí
            děti logicky uvažovat.
          </p>
        </div>
        <div className="column-third">
          <h3 className="subtitle--small swing heading--pink">Pohyb</h3>
          <p className="last">
            Kdo by nechtěl, aby se jeho dítě více pohybovalo, než aby bylo
            baveno pasivně? Přidanou hodnotou našich her je pohyb ve městě,
            parcích, promenádách, hřištích, náměstích, jednoduše v ulicích Brna.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whyplay;
