import React, { useState } from 'react';
import './style.css';
import relief from '../../img/relief0.jpg';




const Hint = () => {
  const [isOpen, setIsOpen] = useState(false);
 const handleClick= ()=> {
  isOpen ? setIsOpen(false) : setIsOpen(true)

 }

  return isOpen? <img onClick={handleClick} className="relief" src={relief}></img>:
  <button onClick={handleClick} className="btn"> Hint </button>}
    
    

    
{/*  Ted chci  
      {isOn? "Napoveda" : "Zapnout"}
    </button>
    <img  
 { <img src={"relief"+(isOn ? "0" : "1") +".jpg"}
   className={ isOn ? "btn--on" : "btn"}></img> }  */} 


export default Hint;