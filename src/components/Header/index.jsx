import React, { useState } from 'react';
import './style.css';
import TopbarLeft from './TopbarLeft';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClose = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <header>
      <div className="topbar container">
        <TopbarLeft />
        <div className="navigation">
          <button
            onClick={() => (menuOpen ? setMenuOpen(false) : setMenuOpen(true))}
            className={menuOpen ? 'hamburger hamburger--open' : 'hamburger'}
            aria-label="menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={menuOpen ? 'nav-closed' : 'nav-open'}>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
