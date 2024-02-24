import Gauge from "./Gauge.jsx";
import Home from "./Home";
import Measure from './Measure';
import Pattern from './Pattern.jsx';
import './App.css'
import { useState, useContext } from "react";
import {Routes, Route} from 'react-router-dom';
import UnitsContext from "./contexts/UnitsContext.js";
import ProgressBar from 'react-bootstrap/ProgressBar';

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
  const [length, setLength] = useState(0);
  const [neck, setNeck] = useState(0);
  const [armhole, setArmhole] = useState(0);
  const [sleeve, setSleeve] = useState(0);

  return (
    <>
    <ProgressBar striped = {true} now={prog} variant="barColor" style={{top:0, left:25, right:25, marginBottom: 50, marginTop: 50, position: 'absolute'}}/>
    
    <UnitsContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<Home setProg = {setProg}/>}/>
          <Route path="/gauge" element={<Gauge setProg = {setProg} sts = {sts} setSts = {setSts} rows = {rows} setRows = {setRows}/>} />
          <Route path="/measure" element={<Measure units = {units} setProg = {setProg} chest = {chest} setChest = {setChest} neck = {neck} setNeck = {setNeck} armhole = {armhole} setArmhole = {setArmhole} length = {length} setLength = {setLength}/>} />
          <Route path="/pattern" element={<Pattern setProg = {setProg} sts = {sts} rows = {rows} chest = {chest} length = {length} neck = {neck} armhole = {armhole}/>}/>
        </Routes>
      </UnitsContext.Provider>
    </>
  )
}

export default App
