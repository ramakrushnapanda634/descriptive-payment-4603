import { Routes ,Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

import {Home} from "./Components/Home/Home"
import Products from './Components/Products/Products';

import Signin from "./Components/Auth/Signin";
import Signup from "./Components/Auth/SignUp";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Navbar /> */}
      <Signup />
      <Signin />
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Products /> */}
    </div>
  );
}

export default App;
