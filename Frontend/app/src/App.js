import { Routes ,Route} from 'react-router-dom';
// import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

import {Home} from "./Components/Home/Home"
import Products from './Components/Products/Products';
import Checkout from './Components/Checkout/Checkout';
import Payment from "./Components/Payment/Payment";



function App() {
  return (
    <div className="App">
    <Header/>
     <Navbar/> 
     <Routes>
         <Route path="/" element={<Home/>}></Route>
      </Routes>
     <Routes>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
      <Routes>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
      <Routes>
        <Route path="/payment" element={<Payment/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
