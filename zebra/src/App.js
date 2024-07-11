import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/global/HomePage';
import Contact from './pages/global/Contact';
import Shops from './pages/global/Shops';
import Cart from './pages/global/Cart';
import Admin from './pages/global/Admin';
import NavigationBar from './components/NavigationBar';
import Footer2 from './components/Footer/Footer2';
import SingleProduct from './pages/global/SingleProduct';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import MaintainProducts from './pages/admin/MaintainProducts';
import CarouselBanner from './components/CarouselBanner';




function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
        <Route path='' element={<HomePage/>}></Route>
          <Route path='contact' element={<Contact/>}></Route>
          <Route path='shops' element={<Shops/>}></Route>
          <Route path='cart' element={<Cart/>}></Route>
          <Route path='product/:index' element={<SingleProduct/>}></Route>
          <Route path='admin' element={<Admin/>}></Route>

          <Route path='add' element={<AddProduct/>}></Route>
          <Route path='edit' element={<EditProduct/>}></Route>
          <Route path='maintain' element={<MaintainProducts/>}></Route>

     </Routes>
     <Footer2></Footer2>
    </div>
  );
}

export default App;
