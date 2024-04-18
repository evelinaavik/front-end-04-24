import React, { useState } from 'react'

function Seaded() {
  const [keel, muudaKeel] = useState("est");



  return (
    <div>
      <button onClick={() => muudaKeel ("est")}>Eesti keelseks</button>
      <button onClick={() => muudaKeel ("eng")}>To English</button>
      <button onClick={() => muudaKeel ("rus")}>Pyscckij</button>
      <div>Aktiivne keel: {keel} </div>
      {keel === "est" && <div>Leht on hetke eesti keelne</div>}
      {keel === "eng" && <div>Page is in English</div>}
      {keel === "rus" && <div>na pycckom</div>}



    </div>
  )
}

export default Seaded