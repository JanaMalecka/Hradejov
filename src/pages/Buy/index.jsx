import React, { useEffect } from 'react';
import './style.css';
import coverUrl from './img/cover.jpg';
import puzzolenteUrl from './img/puzzolente.jpg';
import omylemUrl from './img/omylem.jpg';
import Button from '../../components/Button';
import { Link, useLocation } from 'react-router-dom';

const Buy = () => {
  return (
    <div className="container">
      <h1 className="title swing">Koupit hru</h1>
      <div className="container-book">
        <div className="book-wrapper">
          <img
            className="book"
            src={coverUrl}
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
        K samotné hře je nezbytný pouze herní plán, papír a tužka, případně
        zařízení umožňující zapisovat průběžná řešení úkolů v podobě čísel.
      </p>
      <p className="paragraph--pink">Cena: 300 Kč</p>
      <p className="heading--pink">
        Hru budete moci zakoupit v průběhu července.
      </p>
      <div className="btn-wrapper btn-wrapper--basket">
        <Button
          disabled={true}
          /* link="https://form.simpleshop.cz/8Oy6/buy/" */
          text="E-shop"
        />
      </div>
      <h2 className="subtitle margin--large swing">Připravujeme</h2>

      <img
        className="book"
        src={puzzolenteUrl}
        alt="obrázek pohádkové postavy Puzzolente"
      />
      <h2 className="subtitle swing heading--pink">Puzzolente</h2>
      <div className="text-wrapper">
        <h3 className="subtitle--small extract">Ukázka z knihy</h3>
        <p className="paragraph extract-text">
          V době, kdy byl Špilberk ještě vězením, zde nuceně pobývalo množství
          provinilců z celého tehdejšího mocnářství. A mezi nimi také vězeň
          číslo 10963, vlastním jménem Sergio Pabio z Neapole, který se jednoho
          léta za dveřmi cely číslo 36 příšerně nudil. A jistě to znáte také
          samy, že nuda může spouštět neskutečná alotria. A tak se také stalo:
          Sergio přemýšlel a vymýšlel jaké naschválnosti by provedl dozorcům za
          to, že oni mohou po práci chodit za svými manželkami pro pohlazení, za
          svými uzenáři a řezníky pro klobásky a špíček a za svými hostinskými a
          sklepmistry pro žejdlík piva či korbel vína – zatímco on musí ležet
          sám, na tvrdém kavalci o chlebu a vodě.
        </p>
        <p className="paragraph extract-text last">
          A tak přemýšlel, jak by se zmenšil, proklouzl zamřížovaným okénkem ven
          a tam dozorcům sfouknul všechny lucerny, rozkutálel do pyramid
          seskládané dělové koule či jim naplival do tabáku a na sirky. Jó, to
          by bylo. Jistě by se vztekali a nadávali mu, jak to dělali za jeho
          dětství, když ještě běhal v neapolských uličkách jako malý capart.
          Často po takovém vyvedeném šprýmu na něj potrefení volali po italsku:
          „Puzzolente!“ Sny to byly tak živé, že jednoho dne obživly a toho dne
          se narodil Puzzolente...
        </p>
      </div>
      <h2 className="subtitle swing heading--pink">Omylem</h2>
      <img
        className="book"
        src={omylemUrl}
        alt="obrázek pohádkové postavy Omylem"
      />
      <div className="text-wrapper">
        <h3 className="subtitle--small extract">Ukázka z knihy</h3>
        <p className="extract-text">
          Náš příběh, jehož součástí se stanete, začal již před řádkou let. Toho
          dne se jeden rybář na břehu Svratky velmi podivil. Na háčku jeho udice
          se zachytila láhev uzavřená velikým špuntem. Sotva ji vylovil a
          odzátkoval, vyskočil z ní malý budulín, štěkl na něj: „Omylem!“,
          zvětšil se a odhopsal směrem k centru města. Chudák rybář jen zavrčel:
          „Si piš, že to bylo omylem!“. Netušil, že se mu pidižvík právě
          představil.
        </p>
        <p className="paragraph extract-text last">
          Už se vám, děti, někdy ztratila nějaká hračka či pastelka, a posléze
          se našla? Záhada ušatá, viďte? Ono totiž není zcela vyloučeno, že v
          tom měl prsty právě tenhleten Omylem. Budulín, trochu potměšilý, ve
          velikánských zelených laclových kalhotách s hlubokými kapsami. Do nich
          se mu vlastním přičiněním zatoulává značné množství věcí, a to i přes
          to, že nejsou jeho. Snad si to ani neuvědomuje. Na výtky s úsměvem
          odpovídá: „To bylo omylem.“ Proto mu tak lidé říkají. A jakoby ho to
          jméno poznamenalo, „omylem“ se mu stávají i jiné nehody a
          nepříjemnosti...
        </p>
      </div>
      <h2 className="subtitle last swing heading--pink">Hra Utrhčíslo</h2>
      <Link to="/game">
        <Button text="Ukázka hry" />
      </Link>
    </div>
  );
};

export default Buy;
