import React, { useState } from 'react'


function Tooted() {
  const [tooted, muudaTooted] = useState(["Nobe", "Tesla", "BMW"]);     // array-s tooted

  return (
    <div>


        <button onClick={() => muudaTooted ([ "Nobe", "Tesla", "BMW", "VW"])}>Lisa auto</button>
        <br />
       {tooted.map(t => <div>{t}</div>)}  



    </div>
  )
}

export default Tooted







// {tooted.map(t => <div>1</div>)}  - prindib iga toote kohta "1"