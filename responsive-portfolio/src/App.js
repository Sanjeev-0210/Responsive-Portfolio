import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage';
// import About from './Components/About';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        {/* <Route path='/about' element={<About/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
