import React, { useEffect } from 'react';
import './style.css';
import coverBookUrl from './img/coverBook.png';
import puzzolenteUrl from './img/puzzolente.jpg';
import omylemUrl from './img/omylem.jpg';
import Button from '../../components/Button';
import { Link, useLocation } from 'react-router-dom';

const Buy = () => {
  return (
    <div className="container">
      <h1 className="title swing">Hru již nelze zakoupit</h1>
      <div className="container-book">
        <div className="book-wrapper">
          <img
            className="book"
            src={coverBookUrl}
            alt="Obálka knihy s pohádkovou postavou Uthrčísla"
          />

          <h2 className="subtitle swing heading--pink">Utrhčíslo</h2>
        </div>
      </div>
      <h3 className="subtitle--small extract">Ukázka z knihy</h3>
      <p className="paragraph extract-text">
        Ahoj děti, znáte Utrhčísla? Že ne? Tak to si – tuším – jen myslíte. I
        když jste ho možná nikdy nepotkaly, jeho práci znáte jistě velmi dobře.
        Je to malá bytost, kulatého, zavalitého tělíčka s krátkými nožičkami a
        mlsnou hubou plnou zubů. Lidem neublíží, to ne, za to čísla si před ním
        nemohou být jistá. Jak totiž jeho jméno napovídá, všude je trhá a sbírá
        a pak si jimi cpe svůj břuch. Baňaté nuly pořádá jako knedlíky, osmičky
        polyká jako noky, jedničky do sebe souká jako špagety a šestky si
        rozmotává a ukusuje jako závitky. Mezi čísly si ale vybírá...
      </p>
      <div className="text-wrapper">
        <p>Délka trasy: cca 2 km</p>
        <p>Odhadovaná doba trvání hry: 1 hod 30 min</p>
        <p>Start – Cíl: Šilingrovo náměstí – druhé nádvoří hradu Špilberk</p>
        <p />
      </div>
      <p>
        K samotné hře je nezbytný pouze herní plán a tužka k zapisování odpovědí
        v podobě čísel.
      </p>

      {/* <p className="heading--pink">
        Cena zahrnuje náklady na poštovné za hru a poštovné za vítěznou odměnu
      </p> */}
      <p className="heading--pink">Hru Utrhčíslo již nelze zakoupit</p>

      <h2 className="subtitle last swing heading--pink">Hra Utrhčíslo</h2>
      <Link to="/game">
        <Button text="Ukázka hry" />
      </Link>
    </div>
  );
};

export default Buy;
