import UnitsContext from "./contexts/UnitsContext.js";
import { useContext, useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

export default function Measure(props) {

    //Selected units to use throughout pattern
    const selectedUnits = useContext(UnitsContext);

    //Set the users current progress through the questions
    useEffect(() => {
      props.setProg(62);
    }, []);

    //Neck measurement: Any value between 1 and the length of the chest - (5 centimeters or 2 inches) to make sure user can't make neck too wide.

    //Armhole depth: Any value between 1 and the length - (3 centimeters or 1 inch) to make sure user can't make armhole bigger than possible.

    return (
      <>
        <h2 style={{marginTop: 70}}>Neck measurement</h2>
        <p>The desired width of the neck.</p>
        <p>This measurement can't be more than your shoulder width {selectedUnits.units === "metric" 
        ? " (" + props.shoulder + " centimeters)."
        : " (" + props.shoulder + " inches)."}</p>
        <p>{props.neck}{props.neck <= 1 ? selectedUnits.units === "metric" ? " centimeter" : " inch" 
        : selectedUnits.units === "metric" ? " centimeters" : " inches"}</p>

          <Form.Range defaultValue = {props.neck} onChange={(e) => props.setNeck(e.target.value)} 
            min="1" max={props.shoulder}
            step={selectedUnits.units === "metric" ? 1 : 0.5}/>

        <hr/>

          <h2>Armhole depth measurement</h2>
          <p>The desired length from the shoulder to the bottom of the armhole. </p>
          <p>For a form-fitting sweater, this is about the length of your shoulder to your armpit. For a looser fit, add the desired inches on top of your shoulder to armpit length.</p>
          <p>This measurement can't be more than the sweater body length {selectedUnits.units === "metric" 
          ? " (" + props.length + " centimeters)."
          : " (" + props.length + " inches)."}</p>
          <p>{props.armhole}{props.armhole <= 1 ? selectedUnits.units === "metric" ? " centimeter" : " inch" : selectedUnits.units === "metric" ? " centimeters" : " inches"}</p>

          <Form.Range defaultValue = {props.armhole} onChange={(e) => props.setArmhole(e.target.value)} 
            min="1" max={props.length}
            step={selectedUnits.units === "metric" ? 1 : 0.5}/>

          <Link to="/measure"><Button variant="dark">Back</Button></Link>
          {' '}
          <Link to="/hem"><Button variant="dark">Next</Button></Link>
      </>
    );
  }