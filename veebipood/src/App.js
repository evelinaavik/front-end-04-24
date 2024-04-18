// import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';  
import Esindused from './pages/Esindused';
import Ariklient from './pages/Ariklient';
import Kinkekaart from './pages/Kinkekaart';
import Ostukorv from './pages/Ostukorv';
import Seaded from './pages/Seaded';
import LisaToode from './pages/LisaToode';
import NotFound from './pages/NotFound';
function App() {
  return (
    <div className="App">

      <Link to="avaleht">
        <img className="pilt" src="https://cdn.pixabay.com/photo/2021/12/27/14/04/paper-rocket-6897262_640.png" alt="" />
      </Link>
      
     <Link to="esindused">
       <button className="nupp">Esindused</button>
     </Link>
       
     <Link to="arikliendile">
       <button className="nupp">arikliendile</button>
     </Link>
       
     <Link to="osta-kinkekaart">
       <button className="nupp">osta-kinkekaart</button>
     </Link>

     <Link to="ostukorv">
       <button className="nupp">ostukorv</button>
     </Link>
       
     <Link to="seaded">
       <button className="nupp">seaded</button>
     </Link>

     <Link to="lisa-toode">
       <button className="nupp">Lisa Toode</button>
     </Link>

     <Routes>
      <Route path="avaleht" element={ <Avaleht/> }></Route>
      <Route path="esindused" element={ <Esindused/>}></Route>
      <Route path="arikliendile" element={ <Ariklient/> }></Route>
      <Route path="osta-kinkekaart" element={<Kinkekaart/> }></Route>
      <Route path="ostukorv" element={ <Ostukorv/>}></Route>
      <Route path="seaded" element={ <Seaded/> }></Route>
      <Route path="lisa-toode" element={ <LisaToode/> }></Route>
      <Route path="*" element={ <NotFound/> }></Route>
     </Routes>
    </div>
  );
}

export default App;
  

// * kõik lehed, mida ei ole