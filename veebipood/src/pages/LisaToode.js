import React, {useRef, useState} from 'react'


function LisaToode() {
   const [sonum, muudaSonum] = useState("Lisa uus toode!");
   const luger = useRef();

   function lisa () { 
    if (luger.current.value === " ") {
      muudaSonum("Toode lisamiseks pead nime andma!")
    } else { 
      muudaSonum ("Toode lisatud: " + luger.current.value + "!");}
   
   }

  return (
    <div>
        <div>{sonum}</div>
       <label>Toote nimi</label><br/>
       <input ref={luger} type="text" /> <br />
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