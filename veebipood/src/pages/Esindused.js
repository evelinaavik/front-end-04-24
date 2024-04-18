import React, { useState } from 'react'

function Esindused() {
  // linn on muutuvas seisundis ja tema algne väärtus on pandud useState sulgude sisse. 
// muutuvad seisundid on ilma jutumärkideta sõnda
// väärtused on jutumärkideta sõnad
// kõik, mis on inglise keele, on süsteemi poolt antud 
// vasakul muutuja, paremal muutja 
  const [linn, muudaLinn] = useState("Tallinn"); 

  return (
    <div>
      <div>Aktiivne linn: {linn}</div>
      <button onClick ={() => muudaLinn("Tallinn")}>Tallinn</button>
      <button onClick ={() => muudaLinn("Tartu")}>Tartu</button>
      <button onClick ={() => muudaLinn("Narva")}>Narva</button>
      <button onClick ={() => muudaLinn("Pärnu")}>Pärnu</button>
    

     {linn === "Tallinn" &&
     <div>
      <div>Ülemiste</div>
      <div>Rocca al Mare</div>
      <div>Magistrali</div>
      <div>Vesse</div>
      <div>Kristiine</div>
      <div>Järveotsa</div>
      </div>}

     {linn === "Tartu" &&
     <div> 
        <div>Raatuse</div>
        <div>Lõunakeskus</div>
      </div>}
      

      {linn === "Narva" && <div>Fama</div>}
      {linn === "Pärnu" && <div>Port Artur2</div>}



  </div>
  )
}

export default Esindused