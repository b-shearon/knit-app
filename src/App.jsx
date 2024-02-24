import {Routes, Route} from 'react-router-dom';
import Gauge from "./Gauge.jsx";
import Home from "./Home";
import Measure from './Measure';
import Pattern from './Pattern.jsx';
import { useEffect, useState, useContext } from "react";
import './App.css'
import UnitsContext from "./contexts/UnitsContext.js";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Navbar, Container } from 'react-bootstrap';

function App() {

  //Units of all user measurements, using context UnitsContext
  const [units, setUnits] = useState("metric");
  const value = {units, setUnits}

  //Progress bar level
  const [prog, setProg] = useState(0);

  //User gauge
  const [sts, setSts] = useState(0);
  const [rows, setRows] = useState(0);

  //User measurements
  const [chest, setChest] = useState(0);
  const [neck, setNeck] = useState(0);
  const [armhole, setArmhole] = useState(0);

  return (
    <>
    <ProgressBar striped = {true} now={prog} variant="barColor" style={{top:0, left:25, right:25, marginBottom: 50, marginTop: 50, position: 'fixed'}}/>
    
    <UnitsContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<Home setProg = {setProg}/>}/>
          <Route path="/gauge" element={<Gauge setProg = {setProg} sts = {sts} rows = {rows} setSts = {setSts} setRows = {setRows}/>} />
          <Route path="/measure" element={<Measure setProg = {setProg} setChest = {setChest} setNeck = {setNeck} setArmhole = {setArmhole}/>} />
          <Route path="/pattern" element={<Pattern setProg = {setProg} sts = {sts} rows = {rows}/>}/>
        </Routes>
      </UnitsContext.Provider>
    </>
  )
}

export default App
