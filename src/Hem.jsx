import UnitsContext from "./contexts/UnitsContext.js";
import { useEffect, useContext } from "react";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { Card, Col } from "react-bootstrap";


export default function Style(props) {

    //Selected units to use throughout pattern
    const selectedUnits = useContext(UnitsContext);

    //Set the users current progress through the questions
    useEffect(() => {
      props.setProg(80);
    }, []);

    return (
      <>
        <h2 style={{marginTop: 70}}>Hem</h2>
        <p>Select the following hem you want your sweater to have.</p>

        <Form.Select aria-label="Sweater Hem Selection" defaultValue={props.hem} onChange={(e) => props.setHem(e.target.value)}>
            <option value="0">No hem finishings</option>
            <option value="1">Ribbing</option>
            <option value="2">Folded hem</option>
        </Form.Select>

        {props.hem == 1 ? <>
          <p style={{marginTop: "2em"}}>Input the desired length of your ribbing</p> 
          <p>Body hem: {props.bodyRibbing} {selectedUnits.units === "metric" ? " centimeters" : " inches"}</p>
            <Form.Range aria-label="Body Ribbing Length Slider" 
            defaultValue = {props.bodyRibbing} onChange={(e) => props.setBodyRibbing(e.target.value)} 
            min="1" max={props.length - props.armhole} 
            step={selectedUnits.units === "metric" ? 1 : 0.5}/>
          <p>Sleeve hems: {props.sleeveRibbing} {selectedUnits.units === "metric" ? " centimeters" : " inches"}</p>
            <Form.Range aria-label="Sleeve Cuff Ribbing Length Slider" 
            defaultValue = {props.sleeveRibbing} onChange={(e) => props.setSleeveRibbing(e.target.value)} 
            min="1" max={props.sleeve} 
            step={selectedUnits.units === "metric" ? 1 : 0.5}/>
        </> : <></>}

        <Link to="/measure2"><button>Back</button></Link>
            {' '}
        <Link to="/pattern"><button>Next</button></Link>
                
      </>
    );
  }