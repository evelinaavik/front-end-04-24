import React, { useState, useRef } from 'react'
import HinnadJSON from '../data/hinnad.json';
import { Link } from 'react-router-dom';

function HaldaHinnad() {
    const [hinnad, muudaHinnad] = useState(HinnadJSON.slice());
    const hindRef = useRef();
    const lisajaRef = useRef();
    // const lisajaRef = useRef();

    function kustuta(jrknr) {
        HinnadJSON.splice(jrknr, 1);
        muudaHinnad(HinnadJSON.slice());
    }

    function lisaLoppu(hind) {
        HinnadJSON.push(hind);
        muudaHinnad(HinnadJSON.slice());
    }

     function lisa(){
      const uusHind = {
        "hind": Number(hindRef.current.value), 
        "lisaja": lisajaRef.current.value
      };
        HinnadJSON.push(uusHind);
        muudaHinnad(HinnadJSON.slice());
     }

  return (
    <div>
         
         <label>Lisa hind</label>
         <input type="text" ref={hindRef}/>
         <button onClick={lisa}>Lisa</button><br /><br />

         <label>Lisa lisaja</label>
         <input type="text" ref={lisajaRef}/>
         <button onClick={lisa}>Lisa</button>

         <br /><br />

        {hinnad.map((hind, jrknr ) =>
             <div key={jrknr}>
            <div>{hind.hind}</div> 
            <div>{hind.lisaja}</div>
             <button onClick={() => kustuta (jrknr)}>x</button>
             <button onClick={() => lisaLoppu (hind)}>Lisa hind</button>
             <Link to={"/muuda-hind/" + jrknr}>
              <button>Muuda</button>
             </Link>
            </div>)}
    </div>
  )
}

export default HaldaHinnad


// {hind.hind} = erinevad asjad