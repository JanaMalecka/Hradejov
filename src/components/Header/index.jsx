import React, { useState } from 'react';
import './style.css';
import logoUrl from './img/logo.png';
import faceUrl from './img/face.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
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
              href="https://www.facebook.com/hradejov.cz/"
              /* target="_blank" */
            >
              <img className="icon-fb" src={faceUrl} alt="ikonka Facebooku" />
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
  );
};

export default Header;
