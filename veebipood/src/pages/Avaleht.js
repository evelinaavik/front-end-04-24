import React, { useState} from 'react'

function Avaleht() {
const [laigitud, muudaLaigitud] = useState(true); //kahendväärtus e boolean; saan tagurpidi keerata
// nt sisselogiine, registreermine, makstud jms
const [kogus, muudaKogus] =useState (0);   // number; saab kokku liita jt tehted; suurem/väiksem <; nt ostukorvi 
// kogusumma, toodete koguarv;
const [sonum, muudaSonum] = useState ("Muuda kogust!")  // sõna e string; "isikukood", "postiindeks", "telefoni nr"; 
// vt kas sisaldab sellist lühendit, suurteks tähtedeks; suurteks tähtedeks; mitu tähemärki, 

//  kollased - funktsioonid 
//  helesinine html atribuut  
//  tavaline sinine - html muutuja on 
//  tumesinine - liigitus / sissekirjutatud sõna JS / HTML-is
//  oranž - string
//  helero - number
//  tumeroh - kommentaar
//  valge - erinevad märgid
//  lilla - käsklused        import, export, if, return

// {{{{{{}}}}}}

// märgid värvuvad kollane-lilla-sinine
  
   function nulli  () { 
      muudaKogus(0);
      muudaSonum ("Kogus nullitud!")
   }

   function vahenda () {
      muudaKogus(kogus - 1);
      muudaSonum ("Kogus vähendatud!");
   }

   function suurenda () {
       muudaKogus(kogus + 1 );
       muudaSonum("Kogus suurendatud!")
   }



  return (
    <div>
      {laigitud === false && <img onClick={() => muudaLaigitud(!laigitud)} src="/mittelaigitud.svg" alt="" />}
     {laigitud === true && <img onClick={() => muudaLaigitud(!laigitud)} src="/laigitud.svg" alt="" />}

     {/* <button onClick={() => muudaLaigitud(true)}>Muuda like peale</button>
     <button onClick={() => muudaLaigitud(false)}>Võta like maha</button> */}

{/* 
     <button onClick={() => muudaLaigitud(!laigitud)}>Muuda like'i</button> */}
       
<br />
<br />
     
    <div>{sonum}</div>
    {/* Kui kutsun välja otse UseState muutmise funktsiooni, siis
     on ainuke viis onClick={()=> muudaLaigitud(!laigitud)} kui täidan funkts järgseid sulge, pean panema () => ette*/}

    {kogus !== 0 && <button onClick={() => nulli ()}>Tagasi nulli</button> }
     <button disabled= {kogus === 0} onClick={vahenda}>-</button>  
     <span>{kogus}</span>
     <button onClick={suurenda}>+</button>  
    </div>
  )
}

export default Avaleht


// ! booleani muutuja ees, et ole ole vastupidi mis sa enne olid ehk 
// kui enne oli false, siis nüüd on true ja vastupidi

