import React from 'react';
import './style.css';
import coverUrl from './img/cover.png';
import basketUrl from './img/basket.svg';
import puzzolenteUrl from './img/puzzolente.jpg';

const Buy = () => {
  return (
    <div className="container">
      <h1>Koupit hru</h1>
      <div className="container-book">
        <img
          className="book"
          src={coverUrl}
          alt="Obálka knihy s pohádkovou postavou Uthrčísla"
        />
        <h2>Utrhčíslo</h2>
        <p>Délka trasy: cca 2 km</p>
        <p>Odhadovaná doba trvání hry: 1 hod 30 min</p>

        <p>Start – Cíl: Šilingrovo náměstí – druhé nádvoří hradu Špilberk</p>

        <p />
        <p>
          K samotné hře je nezbytný pouze herní plán, papír a tužka, případně
          zařízení umožňující zapisovat průběžná řešení úkolů v podobě čísel.
        </p>
      </div>
      <p>
        Ahoj děti, znáte Utrhčísla? Že ne? Tak to si – tuším – jen myslíte. I
        když jste ho možná nikdy nepotkaly, jeho práci znáte jistě velmi dobře.
        Je to malá bytost, kulatého, zavalitého tělíčka s krátkými nožičkami a
        mlsnou hubou plnou zubů. Lidem neublíží, to ne, za to čísla si před ním
        nemohou být jistá. Jak totiž jeho jméno napovídá, všude je trhá a sbírá
        a pak si jimi cpe svůj břuch. Baňaté nuly pořádá jako knedlíky, osmičky
        polyká jako noky, jedničky do sebe souká jako špagety a šestky si
        rozmotává a ukusuje jako závitky. Mezi čísly si ale vybírá...
      </p>
      {/* , má to s nimi
        jako lidé a hlavně děti s jídly. Některá mu chutnají více, jiná méně.
        Nejraději má různé součty a součiny tedy čísla pomalu a komplikovaně
        připravovaná, ale také stovky, dvoustovky a pětistovky z bankovek. Ta mu
        tuze chutnají. Nu a to se lidé musí mít na pozoru, aby jim Utrhčíslo
        nespořádal celou výplatu. To by jim totiž pak nezbývalo na kolotoče,
        zmrzliny a žvýkačky či hranolky pro jejich děti.
      </p>

      <p>
        Naštěstí nemusíme jen spoléhat na neustálé hlídání peněženek: není nutné
        na nich spát jako na polštáři či sedět jako na podušce. Stačí, když
        Utrhčísla sem tam nakrmíme, a mu už se rodičovské peněženky i se všemi
        obsahujícími čísly samy z hlavy vykouří.
      </p>   */}
      <div className="btn-wrapper">
        <a href="" className="btn-basket">
          <img
            className="btn icon-basket"
            src={basketUrl}
            alt="ikonka nákupního košíku"
          />
        </a>
        <div className="price">300 Kč</div>
      </div>
      <p>Připravujeme</p>
      <h2>Puzzolente</h2>
      <img
        className="book-puzzolente"
        src={puzzolenteUrl}
        alt="obrázek pohádkové postavy Puzzolente"
      />
      <h2>Hra Utrhčíslo</h2>
      <div className="btn-wrapper">
        <button className="btn">
          Podívejte se na ukázku hry, kterou pro Vás jistě stihneme
          naprogramovat...
        </button>
      </div>
    </div>
  );
};

export default Buy;
