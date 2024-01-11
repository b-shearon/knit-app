import {Routes, Route} from 'react-router-dom';
import Guage from "./Guage";
import Home from "./Home";
import Measure from './Measure';
import './App.css'

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/guage" element={<Guage/>} />
          <Route path="/measure" element={<Measure/>} />
        </Routes>
    </>
  )
}

export default App
