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
      props.setProg(40);
    }, []);

    //Chest measurement: Any value between 1 and (254 centimeters or 100 inches)
    //Length: Any value between 1 and (254 centimeters or 100 inches)

    return (
      <>
          <h2 style={{marginTop: 70}}>Measurements</h2>
          <p>These are the measurements you want the final sweater to have. If you have a sweater that you like the fit of and want to mimic, it's recommended that you reference it's measurements.</p>

          <hr/>

          <h4>Chest measurement</h4>
          <p>The desired width of the chest of your sweater, from pit to pit.</p>
          <Form>
                <Form.Group as = {Row} controlId="chestMeas" className="justify-content-md-center">
                  <Col md="auto" >
                    <Form.Control value={props.chest ? props.chest : ""} placeholder = {0} onChange={(e) => props.setChest(e.target.value)}/>
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
                    <Form.Control value={props.length ? props.length : ""} placeholder={0} onChange={(e) => props.setLength(e.target.value)}/>
                    </Col>
                    <Form.Label column md="auto">
                    {selectedUnits.units === "metric" ? " centimeters" : " inches"}
                    </Form.Label>
                </Form.Group>
            </Form>
          <Link to="/gauge"><button>Back</button></Link>
          {' '}
          <Link to="/measure2"><button>Next</button></Link>
      </>
    );
  }