import React, { useState, useRef } from 'react'
import esindusedJSON from "../data/esindused.json";
import {Link} from "react-router-dom"

function HaldaEsindused() {
  const [esindused, muudaEsindused] = useState(esindusedJSON.slice());
  const esindusedRef =useRef();
  const telRef = useRef();
  const aadressRef = useRef();

  function kustuta(jrknr) {
    esindusedJSON.splice(jrknr, 1);                       // 1 - mitu toodet korraga kustutatakse
    muudaEsindused(esindusedJSON.slice());                // muutus ka HTMLis
  }
  
  function lisaLoppu(esindus) {
    esindusedJSON.push(esindus);                       
    muudaEsindused(esindusedJSON.slice());              
  }
  
  function lisaVormist() {
    const uusEsindus = {
    "nimi": esindusedRef.current.value, 
    "tel": telRef.current.value, 
    "aadress": aadressRef.current.value
    };
    esindusedJSON.push(uusEsindus);
    muudaEsindused(esindusedJSON.slice());
  }
// uus esindus push objektina
  return (
    <div>
   <br /><br />
        <label>Esinduse nimi</label><br />
         <input type="text" ref={esindusedRef}/><br />
         <label>Esinduse telefon</label><br />
         <input type="text" ref={telRef}/><br />
         <label>Esinduse aadress</label><br />
         <input type="text" ref={aadressRef}/><br />
         <button onClick={lisaVormist}>Sisesta</button> <br /><br />
         
          {esindused.map((esindus, jrknr ) =>
         <div key={jrknr}>  
           <div>{esindus.nimi}</div>
           <div>{esindus.tel}</div>
           <div>{esindus.aadress}</div>
            <button onClick={() => kustuta(jrknr)}>x</button>
            <button onClick={() => lisaLoppu(esindus)}>Lisa lõppu juurde</button>
            <Link to={"/muuda-esindus/" + jrknr}>
              <button>Muuda</button>
            </Link>
         </div> )}
    </div>
  )
}

export default HaldaEsindused

// faili on seitud Esindusete lehega, mis siin on võetud ära, on ka teises kadunud (saab taastada)

// key 