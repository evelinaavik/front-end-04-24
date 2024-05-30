import React, { useState } from 'react';
import esindusedJSON from "../data/esindused.json"
import { Link } from 'react-router-dom';

function Esindused() {
// linn on muutuvas seisundis ja tema algne väärtus on pandud useState sulgude sisse. 
// muutuvad seisundid on ilma jutumärkideta sõnda
// väärtused on jutumärkideta sõnad
// kõik, mis on inglise keele, on süsteemi poolt antud 
// vasakul muutuja, paremal muutja 
  const [linn, muudaLinn] = useState("Tallinn"); 
  const [keskused, muudaKeskused] = useState(esindusedJSON.slice());
  // .slice array 

 const reset = () => {
  muudaKeskused(esindusedJSON.slice())
 }

  const sorteeriAZ = ()  => { 
    keskused.sort((a, b) => a.nimi.localeCompare(b.nimi));
    muudaKeskused(keskused.slice());
  } 
  // .sort - sorteerib
  // useState annab käsi HTMLI uuendamiseks   / .slice uuendab array

  const sorteeriZA = ()  => { 
    keskused.sort((a, b) => b.nimi.localeCompare(a.name));
    // keskused.reverse(); 
    muudaKeskused(keskused.slice());
  } 

  const sorteeriTahedArv = ()  => { 
    keskused.sort((a, b) => a.nimi.length - b.nimi.length);
    muudaKeskused(keskused.slice());
  } 
 // .sort() tähtsitku järjekorras
 // .sort() muu sorteerimine; (method) Array string seletus hiirega sulul

 const sorteeriTahedArvKah = ()  => { 
  keskused.sort((a, b) => b.nimi.length - a.nimi.length);
  muudaKeskused(keskused.slice());
} 

const sorteeriTahedArvKolm = ()  => { 
  keskused.sort((a, b) => a.nimi[2].localeCompare(b.nimi[2]));
  muudaKeskused(keskused.slice());
} 

// kolmanda tähe järgi A-Z
// const filtreeriUheksaTahelised = () => {
//     const vastus = keskused.filter(keskus => keskus.length === 9);
//     muudaKeskused(vastus);}
// võib olla ka lihtsalt k, tähistab keskust

const filtreeriVahemalt7Tahte = () => {
  const vastus = keskused.filter(keskus => keskus.nimi.length >= 7);
  muudaKeskused(vastus);
}

const filtreeriKellelOnLyhendIs = () => {
  const vastus = keskused.filter(keskus => keskus.nimi.includes("is") === true );
  muudaKeskused(vastus);
}

const filtreeriKesLoppedETahega = () => {
  const vastus = keskused.filter(keskus => keskus.nimi.endsWith("e") === true );
  muudaKeskused(vastus);
}

const filtreeriKellelOn3sTahtI = () => {
  const vastus = keskused.filter(keskus => keskus.nimi[2] === "i");  // keskus.charAt(2) === "i"
  muudaKeskused(vastus); 
}

// sõnade sort ja filter kuuluvad nt endsWith 
// siin on keskused see, mis hoiab filtreerimist nö koos ühe, järjestikuse filtreermisena 

// Ülemiste, Vesse, Kristiine
// 8 + 5 + 9 ---> 22
// let summa ---> saan muutujat korduvalt muuta

function kokku(){
  let summa = 0;
  
  // summa = summa + 8;
  // summa = summa + 9;
  // summa = summa + 5;

  keskused.forEach(k => summa = summa + k.nimi.length);
  return summa;
}
  return (

   <div><button onClick={reset}> reset </button><br />

      <div>Aktiivne linn: {linn}</div>
      <button onClick ={() => muudaLinn("Tallinn")}>Tallinn</button>
      <button onClick ={() => muudaLinn("Tartu")}>Tartu</button>
      <button onClick ={() => muudaLinn("Narva")}>Narva</button>
      <button onClick ={() => muudaLinn("Pärnu")}>Pärnu</button>
    
     {linn === "Tallinn" &&
          <div>Tähtede arv kokku {kokku()} tk
        <div>
          <br />
            <button onClick={sorteeriAZ} >Sorteri A-Z</button>
            <br /> <button onClick={sorteeriZA}>Sorteri Z-A</button>
            <br /> <button onClick={sorteeriTahedArv}>Sorteri tähtede arvu järgi kasvavalt</button>
            <br /> <button onClick={sorteeriTahedArvKah}>Sorteri tähtede arvu järgi kahanevalt</button>
            <br /> <button onClick={sorteeriTahedArvKolm}>Sorteri kolmanda tähe järgi A-Z</button>
        </div>
        <div className="filtreeri">
            <br />
            <br /> <button onClick={filtreeriVahemalt7Tahte}>Filtreeri vähemalt 7 tähelised</button>
            <br /> <button onClick={filtreeriKesLoppedETahega}>Filtreeri e-tähega lõppevad</button>
            <br /> <button onClick={filtreeriKellelOnLyhendIs}>Filtreeri kui sisaldab "is"</button>
            <br /> <button onClick={filtreeriKellelOn3sTahtI}>Filtreeri 3. täht "i"</button><br />
        </div>
              {keskused.map((k, index ) => 
              <div key={index}>
                {k.nimi}
                <Link to={"/esindus/" + index }> Vt detailsemalt </Link>
                </div>)}

          {/* // <div>Rocca al Mare</div>
          // <div>Magistrali</div>
          // <div>Vesse</div>
          // <div>Kristiine</div>
          // <div>Järveotsa</div> */}  
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