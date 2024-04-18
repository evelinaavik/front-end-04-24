
import './App.css';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
     <Routes>
      <Route path='' element={ <div>See on avaleht, nähtav locahost:3000 aadresssil</div>}/>
      <Route path='uudised' element={ <div>See on avaleht, nähtav locahost:3000/uudised aadresssil</div>}/>
      <Route path='kontakt' element={ <div>See on avaleht, nähtav locahost:3000/kontakt aadresssil</div>}/>
      <Route path='meist' element={ <div>See on avaleht, nähtav locahost:3000/meist aadresssil</div>}/>

     </Routes>
    </div>
  );
}

export default App;
