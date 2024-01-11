import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { Card, Button, Col } from "react-bootstrap";

export default function Guage(props) {

    //Selected units to use throughout pattern.
    const [units, setUnits] = useState("metric");

    //Guage counts
    const [sts, setSts] = useState(0);
    const [rows, setRows] = useState(0);

    //Final sweater measurements
    const [chest, setChest] = useState(0);
    const [waist, setWaist] = useState(0);
    const [armLength, setArmLength] = useState(0);
    const [neckline, setNeckline] = useState("none");
    const [neckDepth, setNeckDepth] = useState(0);
    const [neckWidth, setNeckWidth] = useState(0);
    const [armpitDepth, setArmpitDepth] = useState(0);
    const [cuff, setCuff] = useState(0);

    return (
        <div>
            <h2>Unit Selector</h2>
            <p>Please select whether you'd like to use metric units (centimeters) or imperial units (inches).</p>
            <select class="form-select" aria-label="Guage size selector" onChange={(e) => setUnits(e.target.value)}>
            <option value="metric">Metric</option>
            <option value="imperial">Imperial</option>
            </select>
            <p/>

            <hr/>

            <h2>Guage</h2>
            <p>First, enter your gauge. This can be found by knitting a {units === "metric" ? "13cm x 13cm" : '5" x 5"'} square using the yarn and needle size you intend to use for your sweater in stockinette stitch. This is known as a gauge swatch. After washing and drying your swatch according to the yarn label's instructions, count the number of stitches across {units === "metric" ? "10cm" : '4"'} horizonatally and vertically and input it into the fields below.</p>

            <Form>
                <Form.Group controlId="guageCount">
                    <Form.Control type="sts" placeholder="0" />
                    <Form.Text>
                    {' '}stitches by{' '}
                    </Form.Text>
                    <Form.Control type="rows" placeholder="0" />
                    <Form.Text>
                    {' '}rows
                    </Form.Text>
                </Form.Group>
            </Form>

            <p/>

            <Link to="/"><button>Back</button></Link>
            {' '}
            <Link to="/measure"><button>Next</button></Link>

        </div>
    );
}