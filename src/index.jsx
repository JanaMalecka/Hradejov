import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
/* import Logo from './components/Logo'; */
/* import Navigation from './components/Navigation'; */
import Intro from './pages/Intro';
import Explore from './pages/Explore';
import Whyplay from './pages/Whyplay';
import facebookUrl from './img/facebook.svg';
import instagramUrl from './img/instagram.svg';
import logo1Url from './img/logo1.png';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section id="home">
        <header>
          <div className="topbar container">
            <div className="topbar-left">
              <img
                className="site-logo"
                src={logo1Url}
                alt="otevřená kniha s názvem Hradějov jako logo stránek"
              />
              <div className="icons">
                <a
                  href="https://www.facebook.com/search/top/?q=hrad%C4%9Bjov"
                  target="_blank"
                >
                  <img
                    className="icon-fb"
                    src={facebookUrl}
                    alt="ikonka Facebooku"
                  />
                </a>
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
      <section id="explore">
        <Explore />
      </section>
      <section id="whyplay">
        <Whyplay />
      </section>
      <section id="buy">
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
