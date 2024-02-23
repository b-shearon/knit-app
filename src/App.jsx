import {Routes, Route} from 'react-router-dom';
import Gauge from "./Gauge.jsx";
import Home from "./Home";
import Measure from './Measure';
import { useEffect, useState, useContext } from "react";
import './App.css'
import UnitsContext from "./contexts/UnitsContext.js";
import ProgressBar from 'react-bootstrap/ProgressBar';

function App() {

  const [units, setUnits] = useState("metric");
  const value = {units, setUnits}

  //<ProgressBar striped = {true} now={15} variant="barColor" />

  return (
    <>
    <UnitsContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/gauge" element={<Gauge/>} />
          <Route path="/measure" element={<Measure/>} />
        </Routes>
      </UnitsContext.Provider>
    </>
  )
}

export default App
