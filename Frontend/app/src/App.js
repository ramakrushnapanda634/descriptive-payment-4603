import { Routes ,Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

import { Home } from "./Components/Home/Home";
import Products from './Components/Products/Products';
import ProductDetails from './Components/Products/ProductDetails';



function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path={`/products/:id`} element={<ProductDetails />} />
        
      </Routes>
      
    </div>
  )
}

export default App;
