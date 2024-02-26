import UnitsContext from "./contexts/UnitsContext.js";
import { useContext, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import {Col, Row } from "react-bootstrap";

export default function Measure(props) {

    //Selected units to use throughout pattern
    const selectedUnits = useContext(UnitsContext);

    //Set the users current progress through the questions
    useEffect(() => {
      props.setProg(60);
    }, []);

    //Neck measurement: Any value between 1 and the length of the chest - (5 centimeters or 2 inches) to make sure user can't make neck too wide.

    //Armhole depth: Any value between 1 and the length - (3 centimeters or 1 inch) to make sure user can't make armhole bigger than possible.

    return (
      <>
        <h2>Neck measurement</h2>
        <p>The desired width of the neck.</p>
        <Form>
          <Form.Range defaultValue = {props.neck} onChange={(e) => props.setNeck(e.target.value)} 
            min="1" max={selectedUnits.units === "metric" ? props.chest - 5 : props.chest - 2}
            step={selectedUnits.units === "metric" ? 1 : 0.5}/>
        </Form>


          <h2>Armhole depth measurement</h2>
          <p>The desired length from the shoulder to the bottom of the armhole. </p>
          <p>For a form-fitting sweater, this is about the length of your shoulder to your armpit. For a looser fit, add the desired inches on top of your shoulder to armpit length.</p>


          <Link to="/measure"><button>Back</button></Link>
          {' '}
          <Link to="/hem"><button>Next</button></Link>
      </>
    );
  }