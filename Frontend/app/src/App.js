import {Home} from '../src/Components/Home/Home'
import {Route,Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
  <Routes>
    <Route path="/" element={<Home/>}>Home</Route>
  </Routes>
    </div>
  );
}

export default App;
