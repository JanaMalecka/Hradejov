import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
/* import Logo from './components/Logo'; */
/* import Navigation from './components/Navigation'; */
import Intro from './pages/Intro';
import facebookUrl from './img/facebook.svg';
import instagramUrl from './img/instagram.svg';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  /*   const [pageTitle, setPageTitle] = useState('Domů');
  const handleSelectItem = (page) => {
    setMenuOpen(false);
    setPageTitle(page);
  }; */

  return (
    <>
      <section id="home">
        <header>
          <div className="topbar container">
            <div className="topbar-left">
              <span className="site-logo">Logo</span>
              <div className="icons">
                <img
                  onClick={() => {
                    <a
                      href="https://www.facebook.com/search/top/?q=hrad%C4%9Bjov"
                      target="_blank"
                    ></a>;
                  }}
                  className="icon-fb"
                  src={facebookUrl}
                  alt="ikonka Facebooku"
                />
                <img
                  className="icon-inst"
                  src={instagramUrl}
                  alt="ikonka Instagramu"
                />
                <div className="icon-inst"></div>
              </div>
            </div>
            <div className="navigation">
              <button
                onClick={() =>
                  menuOpen === true ? setMenuOpen(false) : setMenuOpen(true)
                }
                className={menuOpen ? 'hamburger hamburger--open' : 'hamburger'}
                aria-label="menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              {menuOpen === true ? (
                <nav className="nav-closed">
                  <a
                    /* onSelect={handleSelectItem} */
                    href="#home"
                    className="nav-link"
                  >
                    Domů
                  </a>
                  <a
                    /* onSelect={handleSelectItem} */
                    href="#explore"
                    className="nav-link"
                  >
                    Poznejte své město
                  </a>
                  <a
                    /* onSelect={handleSelectItem} */
                    href="#whyplay"
                    className="nav-link"
                  >
                    Proč hrát naše hry
                  </a>
                  <a
                    /* onSelect={handleSelectItem} */
                    href="#buy"
                    className="nav-link"
                  >
                    Koupit hru
                  </a>
                  <a
                    /* onSelect={handleSelectItem} */
                    href="#contact"
                    className="nav-link"
                  >
                    Kontakt
                  </a>
                </nav>
              ) : null}
              <nav className="nav-open">
                <a href="#home" className="nav-link">
                  Domů
                </a>
                <a href="#explore" className="nav-link">
                  Poznejte své město
                </a>
                <a href="#whyplay" className="nav-link">
                  Proč hrát naše hry
                </a>
                <a href="#buy" className="nav-link">
                  Koupit hru
                </a>
                <a href="#contact" className="nav-link">
                  Kontakt
                </a>
              </nav>
            </div>
          </div>
        </header>
        <Intro />
      </section>
      <section id="#explore">
        <div className="container">
          <h1>Poznejte své město</h1>
          <p>
            V Brně se toho hodně děje. Staví se nové domy, opravují se ty staré,
            rodiče pospíchají do práce a děti do školky či školy. Ale žijí tu i
            jiné bytosti než malí a velcí Brňáci! A ty si nejraději hrají! A
            přímo v ulicích!
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
            Jednotlivé hry mají původ v pohádce, odehrávají se v ulicích Brna,
            děti se orientují za pomoci map, plní úkoly, které je dovedou k
            cíli. Odměna je nemine. Stačí zakoupit herní plán v podobě knihy a
            jít se bavit do ulic!
          </p>
          <p>Prozkoumej zajímavá místa (ikonka - mesto)</p>
          <p>Hraj za pomoci knihy / ikonka - kniha</p>
          <p>Vyřeš úkoly, budeš odměněn (ikonka – dárek – balíček)</p>
          <div className="btn-wrapper">
            <button className="btn">
              Vyberte si svoji knihu (odklik do e-shopu)
            </button>
          </div>
        </div>
      </section>
      <section id="#whyplay">
        <div className="container">
          <h1>Proč hrát naše hry</h1>
          <p>
            Zábava Jak zabavit své děti a vyplnit jejich volný čas řeší mnoho
            rodičů. My vám nabízíme zábavný způsob, který dětem přinese zážitky
            a dobrodružství přímo v jejich městě. Ale i vám.
          </p>
          <p>
            Poznání Jednotlivé knihy s herním plánem jsou zasazeny do
            pohádkového příběhu, který dětem zprostředkuje informace o městě
            Brně. Za pomoci mapy se děti naučí orientovat v prostoru, hry
            prohloubí jejich pozorovací i jazykové schopnosti a plnění
            jednotlivých úkolů donutí děti logicky uvažovat.
          </p>
          <p>
            Pohyb Kdo by nechtěl, aby se jeho dítě více pohybovalo, než aby bylo
            baveno pasivně? Přidanou hodnotou našich her je pohyb ve městě,
            parcích, promenádách, hřištích, náměstích, jednoduše v ulicích Brna.
          </p>
          <div className="btn-wrapper">
            <button className="btn">
              Vyberte si svoji knihu (odklik do eshopu)
            </button>
          </div>
        </div>
      </section>
      <section id="#buy">
        <div className="container">
          <h1>Knihy</h1>
          <h2>Utrhčíslo</h2>
          <p>
            Ahoj děti, znáte Utrhčísla? Že ne? Tak to si – tuším – jen myslíte.
            I když jste ho možná nikdy nepotkaly, jeho práci znáte jistě velmi
            dobře. Je to malá bytost, kulatého, zavalitého tělíčka s krátkými
            nožičkami a mlsnou hubou plnou zubů. Lidem neublíží, to ne, za to
            čísla si před ním nemohou být jistá. Jak totiž jeho jméno napovídá,
            všude je trhá a sbírá a pak si jimi cpe svůj břuch. Baňaté nuly
            pořádá jako knedlíky, osmičky polyká jako noky, jedničky do sebe
            souká jako špagety a šestky si rozmotává a ukusuje jako závitky.
            Mezi čísly si ale vybírá, má to s nimi jako lidé a hlavně děti s
            jídly. Některá mu chutnají více, jiná méně. Nejraději má různé
            součty a součiny tedy čísla pomalu a komplikovaně připravovaná, ale
            také stovky, dvoustovky a pětistovky z bankovek. Ta mu tuze
            chutnají. Nu a to se lidé musí mít na pozoru, aby jim Utrhčíslo
            nespořádal celou výplatu. To by jim totiž pak nezbývalo na kolotoče,
            zmrzliny a žvýkačky či hranolky pro jejich děti.
          </p>

          <p>
            Naštěstí nemusíme jen spoléhat na neustálé hlídání peněženek: není
            nutné na nich spát jako na polštáři či sedět jako na podušce. Stačí,
            když Utrhčísla sem tam nakrmíme, a mu už se rodičovské peněženky i
            se všemi obsahujícími čísly samy z hlavy vykouří.
          </p>

          <p>Délka trasy: cca 2 km</p>
          <p>Odhadovaná doba trvání hry: 1 hod 30 min</p>

          <p>Start – Cíl: Šilingrovo náměstí – druhé nádvoří hradu Špilberk</p>

          <p />
          <p>
            K samotné hře je nezbytný pouze herní plán, papír a tužka, případně
            zařízení umožňující zapisovat průběžná řešení úkolů v podobě čísel.
          </p>
          <div className="btn-wrapper">
            <button className="btn">Koupit knihu</button>
          </div>
          <p>Připravujeme</p>
          <h2>Puzzolente</h2>
          <h2>Hra Utrhčíslo</h2>
          <div className="btn-wrapper">
            <button className="btn">
              Podívejte se na ukázku hry, kterou pro Vás jistě stihneme
              naprogramovat...
            </button>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="container">
          <h1>Kontakt</h1>
          <p>Facebook: Hradějov</p>
          <p>Email: info@hradejov.cz</p>
        </div>
      </section>
    </>
  );
};

render(<App />, document.querySelector('#app'));
