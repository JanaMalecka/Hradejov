import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
/* import Logo from './components/Logo'; */
/* import Navigation from './components/Navigation'; */
import Intro from './pages/Intro';
import Explore from './pages/Explore';
import Whyplay from './pages/Whyplay';
import Buy from './pages/Buy';
import faceUrl from './img/face.png';

import logo2Url from './img/logo2.jpg';

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
                src={logo2Url}
                alt="otevřená kniha s názvem Hradějov jako logo stránek"
              />
              <div className="icons">
                <a
                  href="https://www.facebook.com/search/top/?q=hrad%C4%9Bjov"
                  target="_blank"
                >
                  <img
                    className="icon-fb"
                    src={faceUrl}
                    alt="ikonka Facebooku"
                  />
                </a>
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
                  <a href="#faq" className="nav-link">
                    FAQ
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
                <a href="#faq" className="nav-link">
                  FAQ
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
        <Buy />
      </section>
      <section id="faq">
        <div className="container">
          <h1>FAQ</h1>
          <h3>Co je to Hradějov?</h3>
          <p>
            Hry pro rodiče s dětmi ve věku 4-10 let, které si můžete zahrát
            přímo v ulicích města Brna. Tyto hry jsou založeny na pohádkovém
            příběhu a u dětí podněcují pozorovací schopnosti, rozvíjí jejich
            myšlení a představivost.
          </p>
          <h3>Co si připravit s sebou?</h3>
          <p>
            Postačí vám naše kniha s návodem ke hře a tužka na zapsání odpovědí.
          </p>
          <h3>Jak hra probíhá?</h3>
          <p>
            Po zakoupení hry obdržíte knihu s herním plánem do vaší poštovní
            schránky. Samotná hra spočívá v procházení trasy, na které budete
            plnit jednotlivé úkoly. K orientaci vám poslouží obrázková mapa
            trasy a pohádkový příběh. Plnění jednotlivých úkolů je možné pouze
            na základě nalezení podkladů v reálném prostředí.
          </p>
          <h3>Odměna pro děti?</h3>
          <p>
            Pro každý výtisk herního plánu je připravena jedna výhra. Pro její
            získání zašlete výsledné číslo ze hry spolu s číslem herního plánu z
            tiráže a vaši korespondenční adresu na info@hradejov.cz. Výhru vám
            zašleme poštou. V případě zájmu o více výhor nás kontaktujte na
            témže emailu.
          </p>
          <h3>Jak dlouho trvá hra?</h3>
          <p>
            Hru je možné absolvovat během hodiny. Raději ale počítejte s hodinou
            a půl. Trasa je dlouhá 2 km a zahrnuje několikery schody!
          </p>
        </div>
      </section>
      <section id="contact">
        <div className="container">
          <h1>Kontakt</h1>
          <p>Facebook: Hradějov</p>
          <div className="icons">
            <a
              href="https://www.facebook.com/search/top/?q=hrad%C4%9Bjov"
              target="_blank"
            >
              <img className="icon-fb" src={faceUrl} alt="ikonka Facebooku" />
            </a>
          </div>
          <p>Email: info@hradejov.cz</p>
        </div>
        <footer>
          <p>
            2021, © Hradějov: Novotná&Doušek. Všechna práva vyhrazena. Všechny
            ilustrace a texty her zveřejněné na těchto stránkách jsou dílem
            autorským ve smyslu ust. § 2 zákona č. 121/2000 Sb. Bez předchozího
            písemného souhlasu není možno ilustrace a texty her užít zejména ke
            komerčním účelům.
          </p>
        </footer>
      </section>
    </>
  );
};

render(<App />, document.querySelector('#app'));
