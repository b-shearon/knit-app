import * as React from 'react';
import { Link } from 'react-router-dom';
import './App.css'

export default function Pattern() {
  return (
    <>
        <div>
            <h1>Pattern</h1>
            <h3>Abbreviations</h3>
            <ul>
                <li>st(s) = stitch(es)</li>
                <li>k = knit</li>
                <li>p = purl</li>
                <li>stockinette stitch = *knit 1 row, purl 1 row, repeat from *</li>
                <li>RS = Right side</li>
                <li>WS = Wrong side</li>

            </ul>
            <h3>Body</h3>
            <p>Cast on xx stitches using your selected needles and yarn.</p>
            <p>Knit in stockinette stitch until you panel measures xx xx(in/cm). Make sure to end on a WS row.</p>
        </div>
    </>
  );
}