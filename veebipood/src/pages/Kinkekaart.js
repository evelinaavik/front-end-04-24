import React, { useState } from 'react'

function Kinkekaart() {
const [summa, muudaSumma] = useState (20);

  return (
    <div>
      <span className={summa === 20 ? "aktiivne-summa" : "summa"} onClick={() => muudaSumma(20)}>20eur</span>
      <span className={summa === 50 ? "aktiivne-summa" : "summa"} onClick={() => muudaSumma(50)}>50eur</span>
      <span className={summa === 100 ? "aktiivne-summa" : "summa"} onClick={() => muudaSumma(100)}>100eur</span>
      <div>Kinkekaart {summa} eur</div>
    </div>
  )
}

export default Kinkekaart