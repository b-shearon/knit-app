import UnitsContext from "./contexts/UnitsContext.js";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Button, Row, Col } from "react-bootstrap";

export default function Shoulder(props) {

  //Selected units to use throughout pattern
  const selectedUnits = useContext(UnitsContext);

  //Set the users current progress through the questions
  useEffect(() => {
    props.setProg(30);
  }, []);

  //Form validation
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    navigate('/measure');
  };

  const navigate = useNavigate();

  return (
        <>
        <h2 style={{marginTop: "2.5em", marginBottom: "0.4em"}}>Shoulder Measurement</h2>
        <p>Using a measuring tape, measure from one shoulder to the other. Make sure to keep the measuring tape parallel to the ground. This will be used later to determine the final sleeve length.</p>
        <p>Enter the measurement below.</p>
        <Form validated={validated} onSubmit={handleSubmit}>
                <Form.Group as = {Row} controlId="chestMeas" className="justify-content-md-center">
                  <Col md="auto" >
                    <Form.Control required type="number"
                    min = {selectedUnits.units === "metric" ? "3" : "1"} 
                    max = {selectedUnits.units === "metric" ? "508" : "200"} 
                    value={props.shoulder ? props.shoulder : ""} 
                    placeholder = {0} onChange={(e) => props.setShoulder(e.target.value)}/>
                    </Col>
                    <Form.Label column md="auto">
                    {selectedUnits.units === "metric" ? " centimeters" : " inches"}
                    </Form.Label>
            </Form.Group>
                <Link to="/gauge"><Button variant="dark">Back</Button></Link>
                {' '}
                <Button type = "submit" variant="dark">Next</Button>
        </Form>
        </>
  );

}