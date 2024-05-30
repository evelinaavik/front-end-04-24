
import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import Avaleht from './pages/Avaleht';  
import Esindused from './pages/Esindused';
import Ariklient from './pages/Ariklient';
import Kinkekaart from './pages/Kinkekaart';
import Ostukorv from './pages/Ostukorv';
import Seaded from './pages/Seaded';
import LisaToode from './pages/LisaToode';
import Menyy from './components/Menyy';
import Tootajad from './pages/Tootajad';
import Hinnad from './pages/Hinnad';
import Tooted from './pages/Tooted';

import HaldaEsindused from './pages/HaldaEsindused';
import HaldaHinnad from './pages/HaldaHinnad';
import HaldaTootajad from './pages/HaldaTootajad';
import HaldaTooted from './pages/HaldaTooted';

import MuudaEsindus from './pages/MuudaEsindus';
import MuudaHind from './pages/MuudaHind';
import MuudaToode from './pages/MuudaToode';
import MuudaTootaja from './pages/MuudaTootaja';

import YksEsindus from './pages/YksEsindus';
import YksHind from './pages/YksHind';
import YksToode from './pages/YksToode';
import YksTootaja from './pages/YksTootaja';

import NotFound from './pages/NotFound';
import { useState } from 'react';
import { ContactUs } from './pages/ContactUs';

function App() {
  const [darkMode, setdarkMode] = useState(localStorage.getItem("darkMode"));

   function paneDarkmode() {
    setdarkMode("true");
    localStorage.setItem("darkMode", "true")
   }

   function paneLightmode() {
     setdarkMode("false");
     localStorage.setItem("darkMode", "false")
   }

  return (
    <div className={darkMode === "true" ? "App-dark" : "App" }>     
    
    {/* kui ei ole true, on App-dark */}

    <button onClick={paneDarkmode}>tumeda tautaga</button>
    <button onClick={paneLightmode}>heleda taustaga</button>

<Menyy/>

<Routes>
      <Route path="" element={ < Navigate to="avaleht"/> }></Route>
      <Route path="avaleht" element={ <Avaleht/>}></Route>
      <Route path="esindused" element={ <Esindused/>}></Route>
      <Route path="arikliendile" element={ <Ariklient/> }></Route>
      <Route path="osta-kinkekaart" element={<Kinkekaart/> }></Route>
      <Route path="ostukorv" element={ <Ostukorv/>}></Route>
      <Route path="seaded" element={ <Seaded/> }></Route>
      <Route path="lisa-toode" element={ <LisaToode/> }></Route>
      <Route path="hinnad" element={ <Hinnad/> }></Route>
      <Route path="tooted" element={ <Tooted/> }></Route>
      <Route path="tootajad" element={ <Tootajad/> }></Route>

      <Route path="halda-esindused" element={ <HaldaEsindused />}></Route>
      <Route path="halda-hinnad" element={ <HaldaHinnad /> }></Route>
      <Route path="halda-tooted" element={ <HaldaTooted /> }></Route>
      <Route path="halda-tootajad" element={ <HaldaTootajad /> }></Route>

      <Route path="muuda-esindus/:index" element={ <MuudaEsindus />}></Route>
      <Route path="muuda-hind/:index" element={ <MuudaHind /> }></Route>
      <Route path="muuda-toode/:index" element={ <MuudaToode /> }></Route>
      <Route path="muuda-tootaja/:index" element={ <MuudaTootaja/> }></Route>

      <Route path="esindus/:index" element={ <YksEsindus />}></Route>
      <Route path="hind/:index" element={ <YksHind /> }></Route>
      <Route path="toode/:index" element={ <YksToode /> }></Route>
      <Route path="tootaja/:index" element={ <YksTootaja/> }></Route>

      <Route path="contact" element={ <ContactUs/> }></Route>
      
    
      <Route path="*" element={ <NotFound/> }></Route>  

     </Routes>
   
    </div>
  );
}

export default App;
  

// * kõik lehed, mida ei ole