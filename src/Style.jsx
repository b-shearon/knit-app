import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { Card, Button, Col } from "react-bootstrap";


export default function Style() {
    return (
      <>
        <hr/>

        <h2 style={{marginTop: 70}}>Style</h2>
        <p>Select the following style requirements you want your sweater to have.</p>

        <h3>Neckline</h3>

            <Card variant="outlined">
            <Card.Body>
                <Card.Title>No Neck Shaping</Card.Title>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            <Card variant="outlined">
            <Card.Body>
                <Card.Title>Neck Shaping</Card.Title>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        <h3>Hem</h3>
      </>
    );
  }