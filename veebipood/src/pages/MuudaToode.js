import React from 'react'
import {useRef} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import tootedJSON from "../data/tooted.json"

function MuudaToode() {
  const { index }   = useParams();
    const leitud = tootedJSON[index];
    const navigate = useNavigate();
    const nimiRef = useRef();
    const hindRef = useRef();
    const aktiivneRef = useRef();
    // const piltRef = useRef();

    function muuda() {
      const uusToode = {
        "nimi": nimiRef.current.value,
        "hind": hindRef.current.value,
        "aktiivne": aktiivneRef.current.value
      };

      tootedJSON[index] = uusToode;
      navigate("/halda-tooted/");
    }

    if (leitud === undefined) {
      return <div>Toodet ei leitud</div>
    }

  return (
    <div>

      <label>Nimi</label><br />
      <input type="text"  ref={nimiRef} defaultValue={leitud.nimi}/> <br />
      <label>Hind</label><br />
      <input type="text"  ref={hindRef} defaultValue={leitud.hind}/> <br />
      <label>Aktiivne</label><br />
      <input type="text"  ref={aktiivneRef} defaultValue={leitud.aktiivne}/> <br />
      {/* <label>Pilt</label><br />
      <input type="file"  ref={piltRef} defaultValue={leitud.pilt}/> <br /> */}

      <button onClick={muuda}>Muuda</button> <br />

    </div>
  )
}

export default MuudaToode