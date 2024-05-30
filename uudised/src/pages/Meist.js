import React, { useState } from "react";
import tootajadJSON from "../data/tootajad.json"
import Button from 'react-bootstrap/Button';


function Avaleht () {
const [tootajad, setTootajad] = useState(tootajadJSON.slice());    

const [klikitud, setKlikitud] = useState();
const [valitud, setValitud] = useState("");
const [sonum, muuudaSonum] = useState("Kuva töötaja telefon")

  const kuvaTel = (tootaja) => {
    // console.log(tootaja.phone);
    setKlikitud(tootaja.phone);
    setValitud(tootaja.name);
  }

    return ( 
          <div><br /><br />

          {/* <Button variant="primary">Primary</Button>{' '}
          <Button as={Link} to="/admin/maintain-categories/" variant="primary">{t('maintain-categories')}</Button>{' '} */}


          {/* Valitud inimene {valitud} */}
            {tootajad.map (tootaja =>
              <div>
                   <div className={tootaja.name === valitud ? "valitud" : undefined}> 
                   <div>{tootaja.name}</div>
                   <div>{tootaja.job}</div>
                   {klikitud !== "" && <div>Töötaja telefoni nr: {klikitud} </div>} 
                    <Button onClick={() => kuvaTel(tootaja)}variant="primary">Kuva töötaja telefon</Button>  <br /><br />
                 </div>
              </div>
            )}
          </div>

  )
}

export default Avaleht;


// peida töötaja telefon