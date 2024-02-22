import {Routes, Route} from 'react-router-dom';
import Guage from "./Guage";
import Home from "./Home";
import Measure from './Measure';
import { useEffect, useState, useContext } from "react";
import './App.css'
import UnitsContext from "./contexts/UnitsContext.js";

function App() {

  const [units, setUnits] = useState("metric");
  const value = {units, setUnits}

  return (
    <>
    <UnitsContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/guage" element={<Guage/>} />
          <Route path="/measure" element={<Measure/>} />
        </Routes>
      </UnitsContext.Provider>
    </>
  )
}

export default App
