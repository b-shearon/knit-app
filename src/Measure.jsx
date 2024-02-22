import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { Card, Button, Col } from "react-bootstrap";


export default function Measure() {
    return (
      <>
          <h2>Measurements</h2>
          <p>These are the measurements you want the final sweater to have. If you have a sweater that you like the fit of and want to mimic, it's recommended that you reference it's measurements.</p>

          <hr/>

          <h4>Chest measurement</h4>
          <p>Take a measurement of the fullest part of your chest / bust using a tape measure, keeping the measuring tape parellel to the floor, and input it below.</p>
          <p>The ease of your sweater determines the final fit. Negative ease means the chest measurement of your sweater is less than your bust measurement. Positive ease means the chest measurement of your sweater is greater than your chest measurement. No ease means your sweater will be fitted to your bust exactly.</p>
          <p></p>
          <Form>
                <Form.Group controlId="chestMeas">
                    <Form.Control type="cheastMeasurement" placeholder="0" />
                </Form.Group>
            </Form>

          <h4>Neck measurement</h4>
          <p>The desired width of the neck at the shoulders.</p>

          <h4>Armpit depth measurement</h4>
          <p>The measurement from the shoulder to the bottom of the sleeve hole. </p>
          <p>For a form-fitting sweater, this is about the length of your shoulder to your armpit. For a looser fit, add the desired inches on top of your shoulder to armpit length.</p>


          <p/>

          <Link to="/guage"><button>Back</button></Link>
          {' '}
          <Link to="/"><button>Next</button></Link>
      </>
    );
  }