import React from 'react';
import './style.css';

const FAQ = () => {
  return (
    <div className="container">
      <h1 className="title">FAQ</h1>
      <h3 className="heading--small">Co je to Hradějov?</h3>
      <p>
        Hry pro rodiče s dětmi ve věku 4-10 let, které si můžete zahrát přímo v
        ulicích města Brna. Tyto hry jsou založeny na pohádkovém příběhu a u
        dětí podněcují pozorovací schopnosti, rozvíjí jejich myšlení a
        představivost.
      </p>
      <h3 className="subtitle--small heading--small">
        {' '}
        Co si připravit s sebou?
      </h3>
      <p>
        Postačí vám naše kniha s návodem ke hře a tužka na zapsání odpovědí.
      </p>
      <h3 className="subtitle--small heading--small">Jak hra probíhá?</h3>
      <p>
        Po zakoupení hry obdržíte knihu s herním plánem do vaší poštovní
        schránky. Samotná hra spočívá v procházení trasy, na které budete plnit
        jednotlivé úkoly. K orientaci vám poslouží obrázková mapa trasy a
        pohádkový příběh. Plnění jednotlivých úkolů je možné pouze na základě
        nalezení podkladů v reálném prostředí.
      </p>
      <h3 className="subtitle--small heading--small">Odměna pro děti?</h3>
      <p>
        Pro každý výtisk herního plánu je připravena jedna výhra. Pro její
        získání zašlete výsledné číslo ze hry spolu s číslem herního plánu z
        tiráže a vaši korespondenční adresu na info@hradejov.cz. Výhru vám
        zašleme poštou. V případě zájmu o více výher nás kontaktujte na témže
        emailu.
      </p>
      <h3 className="subtitle--small heading--small">Jak dlouho trvá hra?</h3>
      <p>
        Hru je možné absolvovat během hodiny. Raději ale počítejte s hodinou a
        půl. Trasa je dlouhá 2 km a zahrnuje několikery schody!
      </p>
    </div>
  );
};

export default FAQ;
