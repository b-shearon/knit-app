import UnitsContext from "./contexts/UnitsContext.js";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Button, Row, Col } from "react-bootstrap";

export default function Shoulder(props) {

  const navigate = useNavigate();

  //Selected units to use throughout pattern
  const selectedUnits = useContext(UnitsContext);

  //On load...
  useEffect(() => {
    
    //Set the users current progress through the questions
    props.setProg(30);

    //Sends user back to homepage if they skipped over any steps
    if(props.rows <= 0){
      navigate('/');
    }
    
  }, []);

  //Change shoulder state, also resets neck measurement if needed so it can't be set higher than the shoulder width.
  const changeShoulder = (val) => {
      props.setShoulder(val);
      if(val < props.neck){
        props.setNeck(1);
      }
  };

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
                    placeholder = {0} onChange={(e) => changeShoulder(e.target.value)}/>
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