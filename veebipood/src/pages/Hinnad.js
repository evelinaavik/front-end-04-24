import React, { useState } from 'react'

function Hinnad() {
  const [hinnad, uuendaHinnad] = useState([444, 4, 26, 75, 2, 6, 466, 57]);

  return (
    <div>
        <div>Hindade koguarv: {hinnad.length} tk</div>
        {hinnad.length > 0 && <button onClick ={() => uuendaHinnad([])}>Tühjenda</button>}   
        <button>Lisa </button> 
        {hinnad.map(h => <div>{h}</div>)}
    </div>
  )
}

export default Hinnad



// hinnad. length kui length on suurem kui 0 näita nuppu