import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import tootajadJSON from "../data/tootajad.json"

function MuudaTootaja() {
  const {index} = useParams();
  const leitud = tootajadJSON[index]
  const navigate = useNavigate();
  const nimiRef = useRef();
  const ametikohtRef = useRef();
  const kontaktRef = useRef();
  const telefonRef = useRef();

  function muuda(){
    const uusTootaja = {
      "nimi": nimiRef.current.value,
      "ametikoht": ametikohtRef.current.value,
      "tel": telefonRef.current.value,
      "kontakt": kontaktRef.current.value,
    };
    tootajadJSON[index] = uusTootaja;
    navigate("/halda-tootajad/")
  }

 if (leitud === undefined){
  return <div>Töötajat ei leitud</div>
 }

  return (
    <div>
      <label>Nimi: </label><br />
      <input type="text" ref={nimiRef}  defaultValue={leitud.nimi}/> <br />
      <label>Ametikoht: </label><br />
      <input type="text" ref={ametikohtRef}  defaultValue={leitud.ametikoht}/> <br />
      <label>Kontakt: </label><br />
      <input type="text" ref={kontaktRef}  defaultValue={leitud.kontakt}/> <br />
      <label>Telefon: </label><br />
      <input type="text" ref={telefonRef}  defaultValue={leitud.telefon}/> <br />

      <button onClick={muuda}>Muuda</button>

    </div>
  )
}

export default MuudaTootaja