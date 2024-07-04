import React, { useState } from 'react'
import tootedJSON from "../data/tooted.json"
import { Link } from 'react-router-dom';

function Tooted() {
  const [tooted, muudaTooted] = useState(tootedJSON.slice());     // array-s tooted

  const sorteeriAZ = ()  => { 
    tooted.sort((a, b) => a.nimi.localeCompare(b.name));
    muudaTooted(tooted.slice());
  } 
  // .sort - sorteerib
  // useState annab käsu HTMLI uuendamiseks   / .slice uuendab array

  const sorteeriZA = ()  => { 
    tooted.sort((a, b) => b.nimi.localeCompare(a.nimi));
    // tooted.reverse();
    muudaTooted(tooted.slice());
  }
  
  const sorteeriTahedArv = ()  => { 
    tooted.sort((a, b) => a.nimi.length - b.nimi.length);
    muudaTooted(tooted.slice());
  } 
 // .sort() tähestiku järjekorras
 // .sort() muu sorteerimine; (method) Array string seletus hiirega sulul

 const sorteeriTahedArvKah = ()  => { 
  tooted.sort((a, b) => b.nimi.length - a.nimi.length);
  muudaTooted(tooted.slice());
 }

  return (
    <div>
       <button onClick={sorteeriAZ}>SorteeriAZ</button>
       <button onClick={sorteeriZA}>SorteeriAZ</button>
       <button onClick={sorteeriTahedArv}>Sorteeri kasvavalt</button>
       <button onClick={sorteeriTahedArvKah}>Sorteeri kahanevalt</button>
      <button onClick={() => muudaTooted (tootedJSON.slice())}>Reset</button>
  
       {tooted.map( (t, index )=>
       <div key ={t.nimi}>
        <img className="pilt" src={t.pilt} alt=""/>
        <div>{t.nimi}</div> 
        <div>{t.hind}</div> 
        <div>{t.aktiivne}</div>   
        <div>{t.pilt}</div>   
          
  <Link to={"/toode/" + index }>Tootest täpsemalt </Link> 
      </div>)}  
{/*   
        <div key={t}>
          {t}
          </div>)} */}
       </div>)}  

export default Tooted

// sort ja filter: A-Z, Z-A, Tähed kasvavalt, Tähed kahanevalt
// {tooted.map(t => <div>1</div>)}  - prindib iga toote kohta "1"