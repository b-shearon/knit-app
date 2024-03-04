import UnitsContext from "./contexts/UnitsContext.js";
import { useContext, useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Row, Button } from "react-bootstrap";

export default function Gauge(props) {

    //Selected units to use throughout pattern
    const selectedUnits = useContext(UnitsContext);

    //Set the users current progress through the questions
    useEffect(() => {
        props.setProg(15);
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
      navigate('/shoulder');
    };

    const navigate = useNavigate();

    return (
        <div>
            <h2 style={{marginTop: "2.5em"}}>Unit Selector</h2>
            <p>Please select whether you'd like to use metric units (centimeters) or imperial units (inches).</p>
            <Row className="justify-content-md-center">
                <Col md = "auto">
                <select className="form-select" aria-label="Gauge units selector" defaultValue={selectedUnits.units} onChange={(e) => selectedUnits.setUnits(e.target.value) }>
                <option value="metric">Metric</option>
                <option value="imperial">Imperial</option>
                </select>
                </Col>
            </Row>
            <p/>

            <hr/>

            <h2>Gauge</h2>
            <p>Enter your gauge below. </p>
            <p>This can be found by knitting a {selectedUnits.units === "metric" ? "13cm x 13cm" : '5" x 5"'} square using the yarn and needle size you intend to use for your sweater in stockinette stitch. This is known as a gauge swatch. Wash and dry your swatch according to the yarn label's instructions. Once fully dry, count the number of stitches across {selectedUnits.units === "metric" ? "10cm" : '4"'} horizonatally, and the number of rows across {selectedUnits.units === "metric" ? "10cm" : '4"'} vertically, and input it into the fields below.</p>

            <Form validated={validated} onSubmit={handleSubmit}>
                <Form.Group as = {Row} controlId="gaugeSts" className="justify-content-md-center">
                    <Col md="auto">
                    <Form.Control required  type="number" 
                    min = "4"
                    max = "60"
                    value={props.sts ? props.sts : ""} placeholder = {0} 
                    onChange={(e) => props.setSts(e.target.value)}/>
                        <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                        </Form.Control.Feedback>
                    </Col>
                    <Form.Label column md="auto">
                    {' '}stitches by{' '}
                    </Form.Label>

                    <Col md="auto">
                    <Form.Control required type="number" 
                    min = "4"
                    max = "80"
                    value={props.rows ? props.rows : ""} placeholder = {0} 
                    onChange={(e) => props.setRows(e.target.value)}/>
                    </Col>

                    <Form.Label column md="auto">
                    {' '}rows
                    </Form.Label>
                    
                </Form.Group>
                <Link to="/"><Button variant="dark">Back</Button></Link>
                {' '}
                <Button type = "submit" variant="dark">Next</Button>
            </Form>

        </div>
    );
}