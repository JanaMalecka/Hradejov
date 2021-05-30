import React, { useState } from 'react';

import './style.css';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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
          <ul>
            <li>
              <a href="#home" className="nav-link">
                Domů
              </a>
            </li>
            <li>
              <a href="#explore" className="nav-link">
                Poznejte své město
              </a>
            </li>
            <li>
              <a href="#whyplay" className="nav-link">
                Proč hrát naše hry
              </a>
            </li>
            <li>
              <a href="#buy" className="nav-link">
                Koupit hru
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Kontakt
              </a>
            </li>
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default Navigation;
