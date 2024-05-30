import React from 'react'
import { useParams } from 'react-router-dom'
import TootajadJSON from "../data/tootajad.json"

function YksTootaja() {
  const {index} = useParams();
  const leitud = TootajadJSON[index];

  if (leitud === undefined) {
    return <div>Töötajat ei leitud</div>
  }
  
  return (
    <div>
       <div><b>Töötaja nimi: {leitud.nimi}</b></div><br />
       <hr /><br />
       <div>Töötaja ametikoht: {leitud.ametikoht}</div><br />
       <div>Töötaja kontakt: {leitud.kontakt}</div><br />
       <div>Töötaja telefon: {leitud.telefon}</div><br />
    </div>
  )
}

export default YksTootaja