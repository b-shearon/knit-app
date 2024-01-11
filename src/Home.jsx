import * as React from 'react';
import { Link } from 'react-router-dom';
import './App.css'

export default function Home() {
  return (
    <>
        <div>
            <h1>Knit Sweater Calculator</h1>
            <p>Welcome to the knit sweater calculator. By inputting your guage, measurements, and style preferences, this calculator will make a drop-shoulder sweater pattern tailored to you!</p>
            <Link to="/guage"><button>Start</button></Link>
        </div>
    </>
  );
}