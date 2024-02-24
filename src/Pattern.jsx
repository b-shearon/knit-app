import * as React from 'react';
import { Link } from 'react-router-dom';
import './App.css'

export default function Pattern(props) {

  //Set the users current progress through the questions
  props.setProg(100);

  return (
    <>
        <div>
            <h1>Pattern</h1>
            <h3>Abbreviations</h3>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Symbol</th>
                  <th scope="col">Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">st(s)</td>
                  <td>Stitch(es)</td>
                </tr>
                <tr>
                  <td scope="row">k</td>
                  <td>Knit</td>
                </tr>
                <tr>
                  <td scope="row">p</td>
                  <td>Purl</td>
                </tr>
                <tr>
                  <td scope="row">Stockinette stitch</td>
                  <td>*Knit 1 row, purl 1 row, repeat from *</td>
                </tr>
                <tr>
                  <td scope="row">RS</td>
                  <td>'Right side', the knit side of your work</td>
                </tr>
                <tr>
                  <td scope="row">WS</td>
                  <td>'Wrong side', the purl side of your work</td>
                </tr>
              </tbody>
            </table>

            <h3>Body</h3>
            <p>Cast on xx stitches using your selected needles and yarn.</p>
            <p>Knit in stockinette stitch until you panel measures xx xx(in/cm). Make sure to end on a WS row.</p>
        </div>


        <Link to="/measure"><button>Back</button></Link>
    </>
  );
}