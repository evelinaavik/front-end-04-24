import React, {useState} from 'react'


function LisaToode() {
   const [sonum, muudaSonum] = useState("Lisa uus toode!");

   // function NIMI () {} on samaväärne - vanem, lihtsam, 
   // alumine on uuem, kasutatavam, raksem - seetõttu pigem teen seda
   // const lisa = () => {}

   function lisa () { 
    muudaSonum ("Toode lisatud!")
   }

// funkts on vajalikud:
// 1. kui vaja inputi seest saada väärtuseid kätte
// 2. teen 2 või rohkem rida (2 või rohke operatsiooni - 2 usestate muutust)

  return (
    <div>
        <div>{sonum}</div>
       <label>Toote nimi</label><br/>
       <input type="text" /> <br />
       <button onClick={lisa}>Lisa</button>


    </div>
  )
}

export default LisaToode