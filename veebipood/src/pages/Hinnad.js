import React, { useState } from 'react';
import hinnadJSON from "../data/hinnad.json";
import {Link} from "react-router-dom"

function Hinnad() {
  const [hinnad, uuendaHinnad] = useState(hinnadJSON.slice());
  
  const reset = () => {
    uuendaHinnad(hinnadJSON.slice());
  }

  const sorteeriKasv = ()  => { 
    hinnad.sort((a,b) => a.hind - b.hind );
    uuendaHinnad(hinnad.slice());
  } 

  const SorteeriKah = ()  => { 
    hinnad.sort((a,b) => b.hind -a.hind );
    uuendaHinnad(hinnad.slice());
  } 

  const SorteeriAZ = ()  => { 
    hinnad.sort((a,b) => a.hind.toString().localeCompare(b.hind.toString()));
    uuendaHinnad(hinnad.slice());  
  } 

  const SorteeriZA = ()  => { 
    hinnad.sort();
    hinnad.reverse();
    uuendaHinnad(hinnad.slice());
  } 
  
  const filtreeriSuuremkui50 =() => {
    const vastus = hinnad.filter(hinnad => hinnad.hind > 50);
    uuendaHinnad(vastus);
  }

    
  const filtreeriVaiksemkui20 =() => {
    const vastus = hinnad.filter(hinnad => hinnad.hind < 20);
    uuendaHinnad(vastus);
  }

  const filtreeriPaarisarvud =() => {
    const vastus = hinnad.filter(hinnad => hinnad.hind % 2 === 0 );
    uuendaHinnad(vastus);

  }

function kokku(){
  let summa = 0;
  hinnad.forEach(h => summa = summa + h.hind);
  return summa;
}

  return (
    <div>
        <div>Hindade koguarv: {hinnad.length} tk</div>
        <div>Hindade summma kokku {kokku()} /</div>
        {hinnad.length > 0 && <button onClick ={() => uuendaHinnad([])}>Tühjenda</button>}   
        <button>Lisa </button> 
        <button onClick={sorteeriKasv}>Sorteeri kasvavalt</button>
        <button onClick={SorteeriKah}>Sorteeri kahanevalt</button>
        <button onClick={SorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={SorteeriZA}>Sorteeri Z-A</button>
        <button onClick={filtreeriSuuremkui50}>Jäta alles suuremad kui 50</button>
        <button onClick={filtreeriVaiksemkui20}>Jäta alles väiksemad kui 20</button>
        <button onClick={filtreeriPaarisarvud}>Jäta alles paarisarvud  </button>
        <br /><br /><br />
        <button onClick={reset}>reset</button>   

        {/* reset taastab algse array */}

        {hinnad.map((h, index) =>
          
          <div key={index}>
            {h.hind}
            <Link to={"/hind/" + index }>Vt lähemalt </Link>
            </div>)}
    </div>
  )
}

export default Hinnad



// hinnad. length kui length on suurem kui 0 näita nuppu