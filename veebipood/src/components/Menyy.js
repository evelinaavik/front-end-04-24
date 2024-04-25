import React from 'react';
import {Link} from 'react-router-dom';

function Menyy() {
  return (
    <div>



      <Link to="/avaleht">
        <img className="pilt" src="https://cdn.pixabay.com/photo/2021/12/27/14/04/paper-rocket-6897262_640.png" alt="" />
      </Link>
      
     <Link to="/esindused">
       <button className="nupp">Esindused</button>
     </Link>
       
     <Link to="/arikliendile">
       <button className="nupp">arikliendile</button>
     </Link>
       
     <Link to="/osta-kinkekaart">
       <button className="nupp">osta-kinkekaart</button>
     </Link>

     <Link to="/ostukorv">
       <button className="nupp">ostukorv</button>
     </Link>
       
     <Link to="/seaded">
       <button className="nupp">seaded</button>
     </Link>

     <Link to="/lisa-toode">
       <button className="nupp">Lisa Toode</button>
     </Link>

 
    

    </div>
  )
}

export default Menyy