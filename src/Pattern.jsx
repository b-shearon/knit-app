import UnitsContext from "./contexts/UnitsContext.js";
import { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Pattern(props) {

  //Selected units to use throughout pattern
  const selectedUnits = useContext(UnitsContext);

  //Set the users current progress through the questions
  useEffect(() => {
    props.setProg(100);
  }, []);

  return (
    <>
        <div>
            <h1 style={{marginTop: 70}}>Pattern</h1>
            <hr/>
            <h2 style={{marginBottom: "0.7em"}}>Abbreviations</h2>
            <table className="table">
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
                  <td scope="row">1x1 ribbing</td>
                  <td>*Alternate (K1, P1) for one row, repeat from *</td>
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
            <hr/>

            <h2 style = {{fontWeight: "bold"}}>BODY</h2>
            <h4>Front</h4>
            <p>Cast on {selectedUnits.units === "metric" ? 
                        (Math.floor(props.chest * (props.sts / 10)) + (Math.floor(props.chest * (props.sts / 10)) % 2)) + " " : 
                        (Math.floor(props.chest * (props.sts / 4))) + (Math.floor(props.chest * (props.sts / 4)) % 2) + " "}   
               stitches using your selected needles and yarn.</p>
            {props.hem == 1 ? <p>Knit in 1x1 ribbing until your panel measures {selectedUnits.units === "metric" ? 
                        props.bodyRibbing + " centimeters " :
                        props.bodyRibbing + " inches "
                      }long from the bottom edge. Make sure to end on a WS row. </p> 
                      : <></>}
            {props.hem == 2 ? <><p>Knit {Math.floor(props.rows / 2)} rows in stockinette stitch.</p> 
                      <p>Next, pick up the stitch on the cast-on edge that is parellel to the stitch on your needle.</p></>
                      : <></>}
            <p>Knit in stockinette stitch until you panel measures {selectedUnits.units === "metric" ? 
                        props.length + " centimeters " :
                        props.length + " inches "
                      }long from the bottom edge. Make sure to end on a WS row.</p>
            <p>Cast off.</p>
            
            <h4>Back</h4>
            <p>Repeat the steps for the front to make the back panel.</p>

            <h2 style = {{fontWeight: "bold", marginTop: "1.5em"}}>SLEEVES</h2>
            <p>Cast on xx stitches.</p>
            {props.hem == 1 ? <p>Knit in 1x1 ribbing until your panel measures {selectedUnits.units === "metric" ? 
                        props.sleeveRibbing + " centimeters " :
                        props.sleeveRibbing + " inches "
                      }long from the bottom edge. Make sure to end on a WS row. </p> 
                      : <></>}
            {props.hem == 2 ? <><p>Knit {Math.floor(props.rows / 2)} rows in stockinette stitch.</p> 
                      <p>Next, pick up the stitch on the cast-on edge that is parellel to the stitch on your needle.</p></>
                      : <></>}
            <p>Knit in stockinette stitch until your sleeve measures {selectedUnits.units === "metric" ? 
                        props.length + " centimeters " :
                        props.length + " inches "
                      }long from the bottom edge. Make sure to end on a WS row.</p>
            <p>Cast off.</p>
            <p>Repeat these steps a second time to make the other sleeve.</p>

            <h2 style = {{fontWeight: "bold", marginTop: "1.5em"}}>ASSEMBLY</h2>
            <p>You should have 4 total completed pieces: 1 front panel, 1 back panel, and 2 sleeve panels.</p>
            <p>Lay your back piece down with the WS facing up towards you, and lay the front panel on top of it with the WS facing down. </p>
            <p>Starting from the hem, sew the front panel to the back panel at the sides. Stop sewing each side seam when it reaches {Math.floor(props.length - props.armhole)}
            {selectedUnits.units === "metric" ? 
                        " centimeters " : 
                        " inches "
                        }long.</p>
        </div>


        <Link to="/hem"><button>Back</button></Link>
    </>
  );
}