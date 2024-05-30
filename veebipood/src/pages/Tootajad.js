import React from 'react'
import {useState} from 'react';
import tootajadJSON from "../data/tootajad.json";
import {Link} from "react-router-dom";

function Tootajad() {
// Urmet, Kaido, Liina, Maiki, Heidi, Epp, Kaire, Anet, Maarja, Ave, Annika 
// kuvada üksteiese alla nimed useState ja array abil

const [tootajad, uuendaTootajad] = useState (tootajadJSON.slice())

// // Tühjendamine
  // Koguarv
  // Kui on 0 töötajat, siis ära näita tühjenda nuppu
  // kui on 0 toodet, siis näita  "Ostukorc on tühi ja <Link>"

  const sorteeriAZ = ()  => { 
    tootajad.sort((a, b) => a.nimi.localeCompare(b.name));
    uuendaTootajad(tootajad.slice());
  } 

  const sorteeriZA = ()  => { 
    tootajad.sort((a, b) => b.nimi.localeCompare(a.nimi));
    // tootajad.reverse();
    uuendaTootajad(tootajad.slice());
  } 

  const sorteeriTahedArv = ()  => { 
    tootajad.sort((a, b) => a.nimi.length - b.nimi.length);
    uuendaTootajad(tootajad.slice());
  } 

  const sorteeriTahedArvKah = ()  => { 
    tootajad.sort((a, b) => b.nimi.length - a.nimi.length);
    uuendaTootajad(tootajad.slice());
  } 
  
  const sorteeriTahedArvKaks = ()  => { 
    tootajad.sort((a, b) => a.nimi[1].localeCompare(b.nimi[1]));
    uuendaTootajad(tootajad.slice());
  } 

  const reset = () => {
    uuendaTootajad(tootajadJSON.slice())
   }
 
const filtreeriAi = () => {
  const vastus = tootajad.filter(tootajad => tootajad.nimi.includes("ai" )=== true);
  uuendaTootajad(vastus);
}

const filtreeriKolmasI= () => {
  const vastus = tootajad.filter(tootajad => tootajad.nimi[2] === "i");
  uuendaTootajad(vastus);
}

const filtreeriEsimeneM= () => {
  const vastus = tootajad.filter(tootajad => tootajad.nimi.startsWith("M") === true);
  uuendaTootajad(vastus);
}

const filtreeriPaarisArvT= () => {
  const vastus = tootajad.filter(tootajad => tootajad.nimi.length % 2 === 0);
  uuendaTootajad(vastus);
}

const filtreeriKolmeTahelised = () => {
  const vastus = tootajad.filter(tootajad => tootajad.nimi.length === 3);
  uuendaTootajad(vastus);
}

const filtreeriYle5Tahelised = () => {
  const vastus = tootajad.filter(tootajad => tootajad.nimi.length > 5);
  uuendaTootajad(vastus);
}

  return (
    <div><b>Töötajad </b><br /><br />

    <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
    <button onClick={sorteeriZA}>Sorteeri Z-A</button>
    <button onClick={sorteeriTahedArv}>Sorteeri kasvavalt</button>
    <button onClick={sorteeriTahedArvKah}>Sorteeri kahanevalt</button>
    <button onClick={sorteeriTahedArvKaks}>Sorteeri teise tähe järgi</button><br />

<button onClick={filtreeriKolmeTahelised}>Filtreeri 3 tähelised</button>
<button onClick={filtreeriAi}>Filtreeri sisaldavad "ai"</button>
<button onClick={filtreeriYle5Tahelised}>Filtreeri üle 5 tähelised</button> 
<button onClick={filtreeriKolmasI}>Filtreeri 3. täht I</button>
<button onClick={filtreeriEsimeneM}>Filtreeri 1. täht M</button>
<button onClick={filtreeriPaarisArvT}>Filtreeri paariarvuga</button><br /><br /> 
 
 <button onClick={reset}>reset</button> 
 <div><br />Töötajate koguarv: {tootajad.length} tk</div>
    {tootajad.length > 0 && <button onClick ={() => uuendaTootajad([])}>Tühjenda</button>} <br />
           
        {tootajad.map((t, index) =>
        <div key={index}>
          <div>
              <div><br /></div>
              <div> {t.nimi} </div>
              <div>{t.ametikoht}</div>
              <div>{t.kontakt}</div>
              <div>{t.telefon}</div>
              <Link to={"/tootaja/" + index}>Töötaja andmed: </Link>  
          </div>
        </div>)}
    </div>
  )
}

export default Tootajad