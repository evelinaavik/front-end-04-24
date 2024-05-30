import React, {useRef, useState} from 'react'
import tootedJSON from "../data/tooted.json"

function LisaToode() {
   const [sonum, muudaSonum] = useState("Lisa uus toode!");
   const luger = useRef();
   const hindRef = useRef();
   const piltRef = useRef();
   const aktiivneRef = useRef();

   const lisa = () => {
      if (luger.current.value === " ") {
        muudaSonum("Toote lisamiseks kirjuta toote nimi");
      } else {
        const uusToode = {
          nimi: luger.current.value,
          hind: hindRef.current.value,
          pilt: piltRef.current.value,
          aktiivne: aktiivneRef.current.value
        }
        tootedJSON.push(uusToode)
        muudaSonum("Toode lisatud: " + luger.current.value + "!");
      }
    }

     function kontrolli () {
      if (luger.current.value === "") {
        muudaSonum("Toote nimi on kohustulik!")
      return;
     }

      if (luger.current.value[0].toLowerCase() === luger.current.value[0]) {
          muudaSonum("Toote nimi peab algama suure algustähega!");
  return;
         }
     
         if(luger.current.value.length > 30) {
          muudaSonum("Toote nimi on liiga pikk!");
          return;
         }
   }
// livekontroll onChange ; suure algustähte kontroll; 0 viitab 1.tähele

  return (
    <div>
        <div>{sonum}</div>
       <label>Toote nimi</label><br/>
       <input onChange={kontrolli} ref={luger} type="text" /> <br />   

       <label>Toote hind</label><br/>
       <input ref={hindRef} type="text" /> <br />            
      
       <label>Toote pilt</label><br/>
       <input ref={piltRef} type="file" /> <br />         

      <label>Toode aktiivne</label><br/>
       <input ref={aktiivneRef} type="text" /> <br />     
     
       <button onClick={lisa}>Lisa</button>

    </div>
  )
}

export default LisaToode

// function NIMI () {} on samaväärne - vanem, lihtsam, 
   // alumine on uuem, kasutatavam, raksem - seetõttu pigem teen seda
   // const lisa = () => {}

// funkts on vajalikud:
// 1. kui vaja inputi seest saada väärtuseid kätte
// 2. teen 2 või rohkem rida (2 või rohke operatsiooni - 2 usestate muutust)