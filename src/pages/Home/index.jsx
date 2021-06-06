import React, { useState } from 'react';

import './style.css';

import Header from '../../components/Header';
import Intro from '../Intro';
import Explore from '../Explore';
import Whyplay from '../Whyplay';
import Buy from '../Buy';
import FAQ from '../FAQ';
import Contact from '../Contact';
/* import faceUrl from './img/face.png'; */
import ScrollButton from '../../components/ScrollButton';
import Footer from '../../components/Footer';
/* import Button from './components/Button'; */

const Home = () => {
  return (
    <>
      <section id="home" className="container--separator--pink">
        <Header />
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

export default Home;
