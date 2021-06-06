import React, { useState, useEffect } from 'react';
import './style.css';
import arrowUrl from './img/arrow.svg';

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const height = document.documentElement.clientHeight;

    if (scrollTop > height) {
      setIsVisible(true);
    }
    if (scrollTop < height) {
      setIsVisible(false);
    }
  };
  const handleClick = () => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return isVisible ? (
    <button onClick={handleClick} className="arrow">
      <img
        className="icon-arrow"
        src={arrowUrl}
        alt="ikonka navigace menu"
      ></img>
    </button>
  ) : null;
};
export default ScrollButton;
