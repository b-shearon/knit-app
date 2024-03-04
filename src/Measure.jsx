import UnitsContext from "./contexts/UnitsContext.js";
import { useContext, useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import {Col, Row, Button } from "react-bootstrap";

export default function Measure(props) {

    //Selected units to use throughout pattern
    const selectedUnits = useContext(UnitsContext);

    //Set the users current progress through the questions
    useEffect(() => {
      props.setProg(45);
    }, []);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
      navigate("/measure2");
    };

    const navigate = useNavigate();

    //Chest measurement: Any value between 1 and (508 centimeters or 200 inches)
    //Length: Any value between 1 and (508 centimeters or 200 inches)

    return (
      <>
          <h2 style={{marginTop: 70}}>Measurements</h2>
          <p>These are the measurements you want the final sweater to have. If you have a sweater that you like the fit of and want to mimic, it's recommended that you reference it's measurements.</p>

          <hr/>

          <h4>Chest measurement</h4>
          <p>The desired width of the chest of the sweater, from armpit to armpit.</p>
          {selectedUnits.units === "metric" ?
          <p>For example, for a sweater with a total chest circumference of 100cm, the width of the chest pit to pit would be 100 / 2 = 50cm.</p> : 
          <p>For example, for a sweater with a total chest circumference of 40", the width of the chest pit to pit would be 40 / 2 = 20".</p>
          }
          <Form validated={validated} onSubmit={handleSubmit}>
                <Form.Group as = {Row} controlId="chestMeas" className="justify-content-md-center">
                  <Col md="auto" >
                    <Form.Control required type="number"
                    min = {selectedUnits.units === "metric" ? "3" : "1"} 
                    max = {selectedUnits.units === "metric" ? "508" : "200"} 
                    value={props.chest ? props.chest : ""} 
                    placeholder = {0} onChange={(e) => props.setChest(e.target.value)}/>
                    </Col>
                    <Form.Label column md="auto">
                    {selectedUnits.units === "metric" ? " centimeters" : " inches"}
                    </Form.Label>
                </Form.Group>
          <h4 style={{marginTop: "1.5em"}}>Length measurement</h4>
          <p>The desired length of the sweater, from shoulder to hem.</p>
                <Form.Group as = {Row} controlId="lengthMeas" className="justify-content-md-center">
                  <Col md="auto" >
                    <Form.Control required type = "number"
                    min = {selectedUnits.units === "metric" ? "3" : "1"} 
                    max = {selectedUnits.units === "metric" ? "508" : "200"} 
                    value={props.length ? props.length : ""} placeholder={0} 
                    onChange={(e) => props.setLength(e.target.value)}/>
                    </Col>
                    <Form.Label column md="auto">
                    {selectedUnits.units === "metric" ? " centimeters" : " inches"}
                    </Form.Label>
                </Form.Group>

          <h4 style={{marginTop: "1.5em"}}>Sleeve length measurement</h4>
          <p>The desired length of the sleeves, from shoulder to cuff.</p>
                <Form.Group as = {Row} controlId="sleeveMeas" className="justify-content-md-center">
                  <Col md="auto" >
                    <Form.Control required type="number"
                    min = {selectedUnits.units === "metric" ? "3" : "1"} 
                    max = {selectedUnits.units === "metric" ? "508" : "200"} 
                    value={props.sleeve ? props.sleeve : ""} 
                    placeholder = {0} onChange={(e) => props.setSleeve(e.target.value)}/>
                    </Col>
                    <Form.Label column md="auto">
                    {selectedUnits.units === "metric" ? " centimeters" : " inches"}
                    </Form.Label>
                </Form.Group>



                <Link to="/shoulder"><Button variant="dark">Back</Button></Link>
                {' '}
                <Button type = "submit" variant="dark">Next</Button>
            </Form>
      </>
    );
  }