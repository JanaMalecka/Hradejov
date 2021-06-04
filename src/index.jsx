import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
/* import Logo from './components/Logo'; */
/* import Navigation from './components/Navigation'; */
import Intro from './pages/Intro';
import Explore from './pages/Explore';
import Whyplay from './pages/Whyplay';
import Buy from './pages/Buy';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import faceUrl from './img/face.png';

import logoUrl from './img/logo.png';

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
                src={logoUrl}
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
        <FAQ />
      </section>
      <section id="contact">
        <Contact />
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
