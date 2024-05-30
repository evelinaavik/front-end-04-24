import React from 'react';
import { useParams } from 'react-router-dom';
import esindusedFailist from "../data/esindused.json";

function YksEsindus() {
 const { index } = useParams();   // täpsustab linki ; võtab kasutusele URL-i muutuja ja paneb selle väärtuse selle sõna sisse 
const leitud = esindusedFailist[index];  // kandilised sulud tähistavad järjekorranr abil võtmist

if (leitud === undefined) {
  return <div>Esindust ei leitud</div>
}

  return (
    <div>

        <div> Esinduse nimi  {leitud.nimi} </div>
       
       <hr />
       <div>Telefon:  {leitud.tel} </div>
       <div>Aadress:  {leitud.aadress}</div>

    </div>
  )
}

export default YksEsindus