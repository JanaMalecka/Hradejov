import React, { useState } from 'react';
import './style.css';

import Header from '../../components/Header';
import Intro from '../Intro';
import Explore from '../Explore';
import Whyplay from '../Whyplay';
import Buy from '../Buy';
import FAQ from '../FAQ';
import Contact from '../Contact';
import ScrollButton from '../../components/ScrollButton';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div className="homepage">
      <section
        id="home"
        className="section-container container--separator--pink"
      >
        <Header />
        <Intro />
        <div className="wave wave--pink"></div>
        <div className="divider div-transparent div-dot"></div>
      </section>
      <section
        id="explore"
        className="section-container container--separator--white"
      >
        <Explore />
        <div className="wave wave--white"></div>
        <div className="divider div-transparent div-dot"></div>
        <ScrollButton />
      </section>
      <section
        id="whyplay"
        className="section-container container--separator--pink"
      >
        <Whyplay />
        <div className="wave wave--pink"></div>
        <div className="divider div-transparent div-dot"></div>
      </section>
      <section
        id="buy"
        className="section-container container--separator--white"
      >
        <Buy />
        <div className="wave wave--white"></div>
        <div className="divider div-transparent div-dot"></div>
      </section>
      <section
        id="faq"
        className="section-container container--separator--pink"
      >
        <FAQ />
        <div className="wave wave--pink"></div>
        <div className="divider div-transparent div-dot"></div>
      </section>
      <section
        id="contact"
        className="section-container container--separator--white"
      >
        <Contact />
        <footer>
          <Footer />
        </footer>
      </section>
    </div>
  );
};

export default Home;
