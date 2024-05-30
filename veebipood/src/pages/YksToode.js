import React from 'react'
import { useParams } from 'react-router-dom'
import TootedJSON from "../data/tooted.json"

function YksToode() {
  const {index } = useParams();
  const  leitud = TootedJSON[index];

  if (leitud === undefined) {
    return <div>Toodet ei leitud</div>
  }
  
  return (
    <div>

      <div>Toode: {leitud.nimi} </div>
      <hr></hr>
      <div>Toote omadused: </div>
      <div>Toote hind: {leitud.hind} </div>
      {leitud.aktiivne ? <i>Toode on aktiivne</i>: <i>Toode ei ole aktiinve</i>}
      <div> <img src={leitud.pilt} alt="auto"/></div>
    </div>
  )
}

export default YksToode



//  <img className="pilt" src={t.pilt} alt=""/>