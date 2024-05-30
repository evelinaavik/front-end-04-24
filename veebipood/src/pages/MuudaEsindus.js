import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import  esindusedJSON from "../data/esindused.json"

function MuudaEsindus() {
    const { index }   = useParams();
    const leitud = esindusedJSON[index];
    const esindusedRef = useRef();
    const navigate = useNavigate();
    const aadressRef = useRef();
    const telRef = useRef();

    function muuda() {
      const uusEsindus = {
        "nimi": esindusedRef.current.value, 
        "tel": telRef.current.value, 
        "aadress": aadressRef.current.value
        };
      esindusedJSON[index] = uusEsindus;
      navigate("/halda-esindused");
    }

    if (leitud === undefined) {
      return <div>Esindust ei leitud</div>
    }

  return (
    <div>

      <label>Esindus</label><br />
      <input type="text"  ref={esindusedRef} defaultValue={leitud.nimi}/> <br />
      <label>Esinduse telefon</label><br />
      <input type="text" ref={telRef} defaultValue={leitud.tel}/><br />
      <label>Esinduse aadress</label><br />
      <input type="text" ref={aadressRef} defaultValue={leitud.aadress}/><br />

      <button onClick={muuda}>Muuda</button> <br />

    </div>
  )
}

export default MuudaEsindus