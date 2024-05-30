
import React from 'react'
import {useState} from 'react';
import {Link } from "react-router-dom"
import ostukorvJSON from "../data/ostukorv.json";

function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState (ostukorvJSON.slice())

 function tyhjenda(){
  ostukorvJSON.splice(0,3);     // ostukorvi tühjendamine; (0 - mitmes - 1 mitu tk)   splice on kustutamiseks, saab kasutada taas üles kutsumiseks; 0 viitab, et kustutamine on alates 1. massivi elemedist
  uuendaOstukorv(ostukorvJSON.slice(0));     // slice võtab mälukoha sisse; failide jaoks;
 }

 const reset = () => {
  uuendaOstukorv(ostukorvJSON.slice());
 }

//  function kustutaEsimene(){
//   ostukorvJSON.splice(0,1);     // ostukorvi tühjendamine -  (0 - mitmes - 1 mitu tk)
//   uuendaOstukorv(ostukorvJSON.slice(0));   ;
//  }

//  function kustutaTeine(){
//   ostukorvJSON.splice(1,1);    
//   uuendaOstukorv(ostukorvJSON.slice(0));     ringiga versioon, pigem ei kasutata
//  }

//  function kustutaKolmas(){
//   ostukorvJSON.splice(2,1);     // 
//   uuendaOstukorv(ostukorvJSON.slice(0));     
//  }

//  function kustutaNeljas(){
//   ostukorvJSON.splice(3,1);     // 
//   uuendaOstukorv(ostukorvJSON.slice(0));     
//  }

 function kustuta(jrknr) {
  ostukorvJSON.splice(jrknr,1);      // number viitab muutuvale kohale, tuleb buttoni kaudu, 1 toodet viitab mitu kustutame
  uuendaOstukorv(ostukorvJSON.slice());     
 }

   function lisaRedBull() {
    ostukorvJSON.push("Red Bull");
    uuendaOstukorv(ostukorvJSON.slice());
     }

 function lisaLoppu(toode) {
  ostukorvJSON.push(toode);
  uuendaOstukorv(ostukorvJSON.slice());
 }

  return (
    <div>
      <div>Koguarv: { ostukorv.length} tk</div>   
      { ostukorv.length > 0 &&  <button onClick={tyhjenda}>Tühjenda</button> }
      <button onClick={reset}>Reset</button>
      <button onClick={() => kustuta(0)}>Kustuta esimene</button>
      <button onClick={() => kustuta(1)}>Kustuta teine</button>
      <button onClick={() => kustuta(2)}>Kustuta kolmas</button>
      <button onClick={() => kustuta(3)}>Kustuta neljas</button>
      <button onClick={lisaRedBull}>Lisa Red Bull</button>

      {/* <button onClick={kustutaEsimene}>Kustuta esimene</button>  ringiga versioon, pigem ei kasutata
      <button onClick={kustutaTeine}>Kustuta teine</button>
      <button onClick={kustutaKolmas}>Kustuta kolmas</button>
      <button onClick={kustutaNeljas}>Kustuta neljas</button> */}

      {ostukorv.map((toode, jrknr) =>
        <div key={jrknr}>  
          {jrknr}.
          <img className="pilt" src={toode.pilt} alt=""/>
          <div>{toode.nimi}</div> 
          <div>{toode.hind}</div> 
          <div>{toode.aktiivne}</div> 
          <button onClick={() => kustuta(jrknr)}>x</button>           
          <button onClick={() => lisaLoppu(toode)}> Lisa lõppu üks juurde </button>      
        </div>)}
  
 {/* kõik mis on mapis sees, kordub igal real /// jätab mällu, ilma key-ta teeb otsast peale */}
      <br /><br />

      {ostukorv.length === 0 && 
      <Link to="/avaleht">
        Ostukorv on tühi. Mine avalehele
      </Link>
      }
              
    </div>
  )
}

export default Ostukorv


// halda tootajad lisamine
// töötajad
// vähemlt 9.sammu webshopist / 