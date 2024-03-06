import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import './App.css'

export default function Home(props) {

  return (
    <>
        <div>
            <h1 style={{marginTop: 70}}>404 Error</h1>
            <Link to="/"><Button variant="dark">Return to Home page</Button></Link>
        </div>
    </>
  );
}