import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { Card, Button, Col } from "react-bootstrap";


export default function Measure() {
    return (
      <>
          <h2>Measurements</h2>
          <p>These are the measurements you want the final sweater to have.</p>

          <h4>Chest measurement</h4>
          <p>The measurement of the width of the sweater at the chest. </p>
          <Form>
                <Form.Group controlId="chestMeas">
                    <Form.Control type="cheastMeasurement" placeholder="0" />
                </Form.Group>
            </Form>

          <h4>Neck measurement</h4>
          <p>The width of the neck at the shoulders.</p>

          <h4>Armpit depth measurement</h4>
          <p>The measurement from the shoulder to the bottom of the sleeve hole (For a form-fitting sweater, this is about the length of your shoulder to your armpit. For a looser fit, add the desired inches on top of your shoulder to armpit length.)</p>


          <p/>

          <Link to="/guage"><button>Back</button></Link>
          {' '}
          <Link to="/"><button>Next</button></Link>
      </>
    );
  }