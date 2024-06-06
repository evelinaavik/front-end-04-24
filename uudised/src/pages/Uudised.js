
import React from 'react';
import {Link} from 'react-router-dom';

function Uudised() {
  const uudised = JSON.parse(localStorage.getItem("uudised")) || [];

  return (
    <div>
      <div>See on uudiste leht</div>
        { uudised.length === 0 &&  <div>Lisame õige pea uudised. </div>}
      <div>{uudised.map((uudis, index) =>
         <Link to={"/uudis/" + index}> 
      <div>{uudis}</div>
         </Link>
        )}
      </div>
    </div>
  )
}

export default Uudised