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
import ScrollButton from './components/ScrollButton';
import Footer from './components/Footer';

import logoUrl from './img/logo.png';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <section id="home" className="container--separator--pink">
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
                  <a href="#home" onClick={handleClose} className="nav-link">
                    Domů
                  </a>
                  <a href="#explore" onClick={handleClose} className="nav-link">
                    Poznejte své město
                  </a>
                  <a href="#whyplay" onClick={handleClose} className="nav-link">
                    Proč hrát naše hry
                  </a>
                  <a href="#buy" onClick={handleClose} className="nav-link">
                    Koupit hru
                  </a>
                  <a href="#faq" onClick={handleClose} className="nav-link">
                    FAQ
                  </a>
                  <a href="#contact" onClick={handleClose} className="nav-link">
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
        <div className="wave wave--pink"></div>
      </section>

      <section id="explore" className="container--separator--white">
        <Explore />
        <div className="wave wave--white"></div>
        <ScrollButton />
      </section>

      <section id="whyplay" className="container--separator--pink">
        <Whyplay />
        <div className="wave wave--pink"></div>
      </section>
      <section id="buy" className="container--separator--white">
        <Buy />
        <div className="wave wave--white"></div>
      </section>
      <section id="faq" className="container--separator--pink">
        <FAQ />
        <div className="wave wave--pink"></div>
      </section>
      <section id="contact">
        <Contact />
        <footer>
          <Footer />
        </footer>
      </section>
    </>
  );
};

render(<App />, document.querySelector('#app'));
