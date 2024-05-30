import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import hinnadJSON from "../data/hinnad.json"

function MuudaHind() {
  const {index} = useParams();
  const leitud = hinnadJSON[index];
  const hindRef = useRef();
  const lisajaRef = useRef();
  const navigate = useNavigate();    // suunab kohe Muuda lingi kaudu tagasi hindade juuurde (halda hinnad juurde)

  function muuda(){  // Number 88 --> mitte "88"
    const uusHind = {"hind": Number(hindRef.current.value), "lisaja": "Liis"};
    hinnadJSON[index] = uusHind;
    navigate("/halda-hinnad");
  }

  if (leitud === undefined) {
    return <div>Hinda ei leitud</div>
  }

  return (
    <div>
        <label>Hind</label><br />
       <input type="text" ref={hindRef} defaultValue={leitud.hind}/><br />
       <button onClick={muuda}>Muuda</button><br /><br />

       <label>Lisaja</label><br />
       <input type="text" ref={lisajaRef} defaultValue={leitud.lisaja}/><br />
       <button onClick={muuda}>Muuda</button>

    </div>
  )
}

export default MuudaHind