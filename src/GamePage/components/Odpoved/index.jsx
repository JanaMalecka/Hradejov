import React, { useState } from 'react';
import './style.css';

const Odpoved =() => {
const [isAnswerOk, setisAnswerOk]=useState(false)
const [isEmpty, setisEmpty]=useState (true)

/* console.log(isAnswerOk && !isEmpty) */
return (
    <>
<div className={ isAnswerOk?"btnok":"odpoved" }>

    <input id="input" onChange={(event)=>{
        const cislo = parseInt( event.target.value);
        if (isEmpty){setisEmpty(false)};
     
    
        if (cislo===3) 
        {
            setisAnswerOk(true);
        }
        else{
        setisAnswerOk(false);}
    } 
}  disabled={isAnswerOk} /> 


{!isEmpty && ( isAnswerOk ? <p className="jojo">Jupí správná odpověď < br/> Pokračuj na další úkol</p>:<p className="nene">nenene zkus znovu</p>)}

</div>
<div className="zk"/>
</>
)
}

export default Odpoved;