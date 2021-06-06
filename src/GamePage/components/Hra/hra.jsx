import React from 'react';
import './style.css';
import mapa from './mapacb.png'
import relief from './relief0.jpg'
/* import ruzova from  '../img/ruzova.svg' */

const Hra = () => {
    return (
        <>
        <section>
        <p> Utrhčíslo, jako správný mlsoun, dává přednost správným kombinacím čísel, pichlavá a nesourodá čísla nechává bez povšimnutí. Ono totiž, i když smícháte čísla chutná do špatné kombinace, vznikne pokrm nedobrý. Jak se ostatně přesvědčili při vaření dortu pejsek s kočičkou. Také smíchali samé dobroty, ale vznikl blivajs, ze kterého i zlého psa břicho rozbolelo. Ale to je jiný příběh. Při vaření pro našeho Utrhčísla bude nejlepší držet se osvědčených receptů. Jeden z nich právě držíte v ruce. 
        Troufnete si připravit dobrotu z čísel ukrytých na různých místech, kde se Utrhčíslo rád zdržoval a zdržuje? Každý recept zaručuje chutný výsledek pouze při zachování řádného postupu a použití těch správných ingrediencí. Proto i vy musíte získat ta správná čísla, ve správném pořadí a upravit je požadovaným způsobem.
         </p> 
        </section>
    
        {/* <div className="container"> */}
      <h2>Hra</h2>
      <p>
      Naše cesta za tím správným číslem začíná na Šilingrově náměstí, 
      kde jinde než u rozcestníku v jeho spodní části. Sestupte na ulici
       Pekařskou a projděte místy, kde stávala městská brána, zvaná Brněnská.
      </p>
      <section>
      <img src={mapa} className="mapa" />
       <h2>Kurt Gödel</h2>
       <h3>Cesta k prvnímu úkolu:</h3>
       <p>
       První číslo získáte na Pekařské ulici, u domu, kde se dříve Utrhčíslo rád zastavoval.
       V domě totiž žil Kurt Gödel, poznáte jej podle jeho pamětní desky, mapa vám pomůže.
       </p>
       </section>
          <p>
          Dříve se to tu čísly jen hemžilo: poskakovala po stěnách a stropech, houpala se na lustrech, 
          věšela se na kliky od dveří a kutálela se po schodech. Kurt Gödel byl totiž věhlasný matematik
          a v hlavě měl tolik čísel, že se mu ani do bytu nevešla. Utrhčíslo šplhal za nimi, věšel se hlavou 
          dolů a jazykem je jako mravenečník lapal. A to bylo jediné štěstí, 
          jinak by jich zde bylo zanedlouho tolik, že by se strop pod nimi probořil, anebo by dům prasknul. 
         </p>
        <h2>
        Na pamětní desce Kurta Gödela naleznete data, která vymezují jeho život. 
        Zapište si třetí číslo, tedy to, které udává, ve kterém měsíci se matematik narodil. 
        </h2>
        <img src={relief} className="mapa" />
        <p>Text k nápovědě: „V tomto domě bydlel matematik Kurt Gödel“, případně „pamětní deska matematika Gödela“
             u každého úkolu máme fotku z reálného prostředí jakožto nápovědu. </p>
          <form >
              <h2>Vaše odpověď</h2>
              <input className="input"></input>
          </form>
        </>

    );
};

export default Hra;
