import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

export default function Home(props) {

  //Set the users current progress through the questions
  useEffect(() => {
    props.setProg(0);
  }, []);

  return (
    <>
        <div>
            <h1 style={{marginTop: 70}}>Knit Sweater Calculator</h1>
            <p>Welcome to the knit sweater calculator. By inputting your guage, measurements, and style preferences, this calculator will make a drop-shoulder sweater pattern tailored to you!</p>
            <Link to="/gauge"><Button variant="dark">Start</Button></Link>
        </div>
    </>
  );
}