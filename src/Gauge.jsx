import UnitsContext from "./contexts/UnitsContext.js";
import { useContext, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { Col, Row } from "react-bootstrap";

export default function Gauge(props) {

    //Selected units to use throughout pattern
    const selectedUnits = useContext(UnitsContext);

    //Set the users current progress through the questions
    useEffect(() => {
        props.setProg(25);
      }, []);

    return (
        <div>
            <h2 style={{marginTop: 70}}>Unit Selector</h2>
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
            <p>This can be found by knitting a {selectedUnits.units === "metric" ? "13cm x 13cm" : '5" x 5"'} square using the yarn and needle size you intend to use for your sweater in stockinette stitch. This is known as a gauge swatch. After washing and drying your swatch according to the yarn label's instructions, count the number of stitches across {selectedUnits.units === "metric" ? "10cm" : '4"'} horizonatally and vertically and input it into the fields below.</p>

            <Form>
                <Form.Group as = {Row} controlId="gaugeSts" className="justify-content-md-center">
                    <Col md="auto">
                    <Form.Control value={props.sts ? props.sts : ""} placeholder = {0} onChange={(e) => props.setSts(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                    </Form.Control.Feedback>
                    </Col>
                    <Form.Label column md="auto">
                    {' '}stitches by{' '}
                    </Form.Label>

                    <Col md="auto">
                    <Form.Control value={props.rows ? props.rows : ""} placeholder = {0} onChange={(e) => props.setRows(e.target.value)}/>
                    </Col>

                    <Form.Label column md="auto">
                    {' '}rows
                    </Form.Label>
                    
                </Form.Group>
            </Form>

            <Link to="/"><button>Back</button></Link>
            {' '}
            <Link to="/measure"><button>Next</button></Link>

        </div>
    );
}