
import { Routes ,Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Home from "./Components/Home/Home"
function App() {
  return (
    <div className="App">
     <Header/>
     <Navbar/> 
     <Routes>
<Route path="/" element={<Home/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
