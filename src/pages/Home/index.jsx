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
      <section id="home" className="section-container">
        <Header />
        <Intro />
        <div className="divider div-transparent div-dot"></div>
      </section>
      <section id="explore" className="section-container">
        <Explore />
        <div className="divider div-transparent div-dot"></div>
        <ScrollButton />
      </section>
      <section id="whyplay" className="section-container">
        <Whyplay />
        <div className="divider div-transparent div-dot"></div>
      </section>
      <section id="buy" className="section-container">
        <Buy />
        <div className="divider div-transparent div-dot"></div>
      </section>
      <section id="faq" className="section-container">
        <FAQ />
        <div className="divider div-transparent div-dot"></div>
      </section>
      <section id="contact" className="section-container">
        <Contact />
        <footer>
          <Footer />
        </footer>
      </section>
    </div>
  );
};

export default Home;
