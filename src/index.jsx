import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
/* import Logo from './components/Logo'; */
/* import Navigation from './components/Navigation'; */
import Intro from './pages/Intro';
import Explore from './pages/Explore';
import Whyplay from './pages/Whyplay';
import Buy from './pages/Buy';
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
        <Buy />
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
