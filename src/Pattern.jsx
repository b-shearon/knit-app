import UnitsContext from "./contexts/UnitsContext.js";
import { useContext } from "react";
import { Link } from 'react-router-dom';

export default function Pattern(props) {

  //Selected units to use throughout pattern
  const selectedUnits = useContext(UnitsContext);

  //Set the users current progress through the questions
  props.setProg(100);

  return (
    <>
        <div>
            <h1 style={{marginTop: 70}}>Pattern</h1>
            <hr/>
            <h2>Abbreviations</h2>
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
            <hr/>

            <h2 style = {{fontWeight: "bold"}}>BODY</h2>
            <h4>Front</h4>
            <p>Cast on {selectedUnits.units === "metric" ? 
                        Math.floor(props.chest * (props.sts / 10)) + " " : 
                        Math.floor(props.chest * (props.sts / 4)) + " "}   
               stitches using your selected needles and yarn.</p>
            <p>Knit in stockinette stitch until you panel measures {selectedUnits.units === "metric" ? 
                        props.length + " centimeters " :
                        props.length + " inches "
                      }long. Make sure to end on a WS row.</p>
            <p>Cast off.</p>
            
            <h4>Back</h4>
            <p>Cast on {selectedUnits.units === "metric" ? 
                        Math.floor(props.chest * (props.sts / 10)) + " " : 
                        Math.floor(props.chest * (props.sts / 4)) + " "}   
               stitches using your selected needles and yarn.</p>
            <p>Knit in stockinette stitch until you panel measures {selectedUnits.units === "metric" ? 
                        props.length + " centimeters " :
                        props.length + " inches "
                      }long. Make sure to end on a WS row.</p>
            <p>Cast off.</p>

            <h2 style = {{fontWeight: "bold"}}>SLEEVES</h2>
            <p>Cast on xx stitches.</p>
            <p>Knit in stockinette stitch until your sleeve measures {selectedUnits.units === "metric" ? 
                        props.length + " centimeters " :
                        props.length + " inches "
                      }long. Make sure to end on a WS row.</p>
            <p>Cast off.</p>
            <p>Repeat these steps a second time to make the other sleeve.</p>

            <h2 style = {{fontWeight: "bold"}}>ASSEMBLY</h2>
        </div>


        <Link to="/measure"><button>Back</button></Link>
    </>
  );
}