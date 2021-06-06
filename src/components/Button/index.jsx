import React, { useState } from 'react';
import './style.css';

const Button = (props) => {
  return (
    <div id="foot">
      <button className="button-main button-os">
        <a href={props.link}>{props.text}</a>
      </button>
    </div>
  );
};
export default Button;
