import React from 'react';
import {Link} from 'react-router-dom';

function Menyy() {
  return (
    <div>
      <Link to="/avaleht">
        <img className="pilt" src="https://cdn.pixabay.com/photo/2021/12/27/14/04/paper-rocket-6897262_640.png" alt="" />
      </Link>

     <Link to="/esindused">
       <button className="nupp-e">Esindused</button>
     </Link>

      <Link to="halda-esindused">
       <button className="nupp-e">Halda esindusi</button>
     </Link>
 
     <Link to="/hinnad">
       <button className="nupp-h">Hinnad</button>
     </Link>
  
     <Link to="halda-hinnad">
       <button className="nupp-h">Halda hindu</button>
     </Link>

     <Link to="/tootajad">
       <button className="nupp-t">Töötajad</button>
     </Link> 
     
      <Link to="halda-tootajad">
       <button className="nupp-t">Halda töötajad</button>
     </Link>

       <Link to="tooted">
       <button className="nupp-h">Tooted</button>
     </Link>  

     <Link to="halda-tooted">
       <button className="nupp-h">Halda tooteid</button>
     </Link>

     <Link to="/lisa-toode">
       <button className="nupp-h">Lisa toode</button>
     </Link>  

     <br />
    <Link to="/ostukorv">
       <button className="nupp">Ostukorv</button>
     </Link>
     
     <Link to="/osta-kinkekaart">
       <button className="nupp">Osta kinkekaart</button>
     </Link>

     <Link to="/seaded">
       <button className="nupp">Seaded</button>
     </Link>

     <Link to="/arikliendile">
       <button className="nupp">Ärikliendile</button>
     </Link>
     
     <Link to="contact">
       <button className="nupp">Kontakt</button>
     </Link> <br /><br /><br />
{/*      
     <Link to="logimine">
       <button className="nupp">Logimine</button>
     </Link> */}

    </div>
  )
}

export default Menyy