import { useContext } from "react";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import {Col, Row } from "react-bootstrap";
import UnitsContext from "./contexts/UnitsContext.js";

export default function Measure(props) {

    //Selected units to use throughout pattern
    const selectedUnits = useContext(UnitsContext);

    //Set the users current progress through the questions
    props.setProg(50);

    return (
      <>
          <h2 style={{marginTop: 70}}>Measurements</h2>
          <p>These are the measurements you want the final sweater to have. If you have a sweater that you like the fit of and want to mimic, it's recommended that you reference it's measurements.</p>

          <hr/>

          <h4>Chest measurement</h4>
          <p>Take a measurement of the fullest part of your chest / bust using a tape measure, keeping the measuring tape parellel to the floor, and input it below.</p>
          <p>The ease of your sweater determines the final fit. Negative ease means the chest measurement of your sweater is less than your bust measurement. Positive ease means the chest measurement of your sweater is greater than your chest measurement. No ease means your sweater will be fitted to your bust exactly.</p>
          <Form>
                <Form.Group as = {Row} controlId="chestMeas" className="justify-content-md-center">
                  <Col md="auto" >
                    <Form.Control type="cheastMeasurement" placeholder={props.chest} onChange={(e) => props.setChest(e.target.value)}/>
                    </Col>
                    <Form.Label column md="auto">
                    {selectedUnits.units === "metric" ? " centimeters" : " inches"}
                    </Form.Label>
                </Form.Group>
            </Form>

          <h4>Length measurement</h4>
          <p>The desired length of your sweater, from shoulder to hem.</p>
          <Form>
                <Form.Group as = {Row} controlId="lengthMeas" className="justify-content-md-center">
                  <Col md="auto" >
                    <Form.Control placeholder={props.length} onChange={(e) => props.setLength(e.target.value)}/>
                    </Col>
                    <Form.Label column md="auto">
                    {selectedUnits.units === "metric" ? " centimeters" : " inches"}
                    </Form.Label>
                </Form.Group>
            </Form>

          <h4>Neck measurement</h4>
          <p>The desired width of the neck at the shoulders.</p>

          <h4>Armhole depth measurement</h4>
          <p>The desired length from the shoulder to the bottom of the armhole. </p>
          <p>For a form-fitting sweater, this is about the length of your shoulder to your armpit. For a looser fit, add the desired inches on top of your shoulder to armpit length.</p>


          <Link to="/gauge"><button>Back</button></Link>
          {' '}
          <Link to="/pattern"><button>Next</button></Link>
      </>
    );
  }