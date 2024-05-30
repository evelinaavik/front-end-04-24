
import React from 'react'
import {useState} from 'react';

function Kontakt ()  {
  const [kontakt, n2itaKontakt] = useState("");
  // const [n2itaTelA, muudaN2itaTelA] = useState(false);
  // const [n2itaTelB, muudaN2itaTelB] = useState(false);
  // const [n2itaTelC, muudaN2itaTelC] = useState(false);

  return ( 
  <div>
        <body>
           <div className="taust1">
              <div>
                <h1>Kontakt</h1>
                 <p>Võta ühendust:</p>

      <div className="tabel">
       <table>
        <tr>
          <th>Kes</th> 
          <th>Kus asub</th>
          <th>Kontakt</th> 
        </tr>
        <tr>
          <td>Nimi Nimi <br />
            <button onClick={() => n2itaKontakt ('+372 555 666 777')}>Võta ühendust</button>
          </td>

          {/* <td onClick={() => muudaN2itaTelA (!n2itaTelA)}>Aadress aadress number</td>
          {n2itaTelA && <td> +372 555 666 777</td>} */}
 
        </tr>
        <tr>
          <td>Teine Nimi
         < br />
            <button onClick={() => n2itaKontakt ('+372 111 222 333')}>Võta ühendust</button>
          </td>
          {/* <td onClick={() => muudaN2itaTelB (!n2itaTelB)}>Teine aadress number</td>
          {n2itaTelB && <td>+ 372 111 222 333</td>}
           */}
        </tr>
        <tr>
          <td>Kolmas Nimi
          <br />
            <button onClick={() => n2itaKontakt ('+ 372 333 444 555')}>Võta ühendust</button>
            {kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
          </td>
          {/* <td onClick={() => muudaN2itaTelC (!n2itaTelC)}>Kolmas aadress number</td>
          {n2itaTelC &&<td>+ 372 333 444 555</td>}
     */}
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        
        </tr>
        </table>
              </div>
           </div>

           </div>
        </body>
    </div>
  );
}

export default Kontakt   