import './App.css';
import '../index.css';
import Home from "./Home";
import Gauge from "./Gauge.jsx";
import Shoulder from "./Shoulder.jsx";
import Measure from './Measure';
import Measure2 from './Measure2.jsx';
import Style from './Style.jsx';
import Hem from './Hem.jsx';
import Pattern from './Pattern.jsx';
import PageError from './404Error.jsx';
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
  const [shoulder, setShoulder] = useState(0);
  const [chest, setChest] = useState(0);
  const [length, setLength] = useState(0);
  const [neck, setNeck] = useState(1);
  const [armhole, setArmhole] = useState(1);
  const [sleeve, setSleeve] = useState(0);
  const [hem, setHem] = useState(0);
  const [bodyRibbing, setBodyRibbing] = useState(1);
  const [sleeveRibbing, setSleeveRibbing] = useState(1);

  //Prompts user so they don't lose their calculations unintentionally
  window.addEventListener('beforeunload', (event) => {
    event.returnValue = `Are you sure you want to leave this page? Any information entered will be lost.`;
  });
  
  return (
    <>
    <ProgressBar striped = {true} now={prog} variant="barColor" style={{top:0, left:25, right:25, marginBottom: 50, marginTop: 50, position: 'absolute'}}/>
    
    <UnitsContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<Home setProg = {setProg}/>}/>
          <Route path="/gauge" element={<Gauge setProg = {setProg} sts = {sts} setSts = {setSts} rows = {rows} setRows = {setRows}/>} />
          <Route path="/shoulder" element={<Shoulder setProg = {setProg} shoulder = {shoulder} setShoulder = {setShoulder} neck = {neck} setNeck = {setNeck} rows = {rows}/>}/>
          <Route path="/measure" element={<Measure setProg = {setProg} chest = {chest} setChest = {setChest} length = {length} setLength = {setLength} armhole = {armhole} setArmhole = {setArmhole} sleeve = {sleeve} setSleeve = {setSleeve} rows = {rows} shoulder = {shoulder}/>} />
          <Route path="/measure2" element={<Measure2 setProg = {setProg} shoulder = {shoulder} length = {length} neck = {neck} setNeck = {setNeck} armhole = {armhole} setArmhole = {setArmhole}/>} />
          <Route path = "/style" element={<Style setProg = {setProg}/>}/>
          <Route path = "/hem" element={<Hem setProg = {setProg} hem = {hem} setHem = {setHem} length = {length} armhole = {armhole} sleeve = {sleeve} bodyRibbing = {bodyRibbing} setBodyRibbing = {setBodyRibbing} sleeveRibbing = {sleeveRibbing} setSleeveRibbing = {setSleeveRibbing} chest = {chest} shoulder = {shoulder}/>}/>
          <Route path="/pattern" element={<Pattern setProg = {setProg} sts = {sts} rows = {rows} shoulder = {shoulder} chest = {chest} length = {length} neck = {neck} sleeve = {sleeve} armhole = {armhole} hem = {hem} bodyRibbing = {bodyRibbing} sleeveRibbing = {sleeveRibbing}/>}/>
          <Route path="*" element={<PageError/>}/>
        </Routes>
      </UnitsContext.Provider>
    </>
  )
}

export default App
