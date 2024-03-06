import UnitsContext from "./contexts/UnitsContext.js";
import { useContext, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap";

export default function Pattern(props) {

  const navigate = useNavigate();

  //Selected units to use throughout pattern
  const selectedUnits = useContext(UnitsContext);

  //On load...
  useEffect(() => {

    //Set the users current progress through the questions
    props.setProg(100);

    //Sends user back to homepage if they skipped over any steps
    if(props.rows <= 0 || props.shoulder <= 0 || props.length <= 0){
      navigate('/');
    }
    
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
                      }long from the bottom edge. Make sure to end with a WS row. </p> 
                      : <></>}
            {props.hem == 2 ? <><p>Knit {Math.floor(props.rows / 2)} rows in stockinette stitch.</p> 
            <p>* Next, insert your right needle into the first stitch on your left needle.</p>
                      <p>Then insert you right needle into the cast-on edge loop parallel to first stitch on your left needle.</p>
                      <p>Knit the two stitches together.</p>
                      <p>Repeat from * until you've knit all your stitches together with their corresponding edge loop, and you have no stitches left on your left needle. This completes the folded hem.</p>
                      <p>If needed, <a href = "https://www.youtube.com/watch?v=J_S_P06ok6o&ab_channel=PipandPin" target="_blank" rel="noreferrer noopener">here is a video tutorial.</a></p>
                      </>
                      : <></>}
            <p>Knit in stockinette stitch until you panel measures {selectedUnits.units === "metric" ? 
                        props.length + " centimeters " :
                        props.length + " inches "
                      }long from the bottom edge. Make sure to end with a WS row.</p>
            <p>Cast off.</p>
            
            <h4>Back</h4>
            <p>Repeat the steps for the front to make the back panel.</p>

            <h2 style = {{fontWeight: "bold", marginTop: "1.5em"}}>SLEEVES</h2>
            <p>Cast on {selectedUnits.units === "metric" ? 
                        (Math.floor(props.armhole * (props.sts / 10)) * 2) + " " :
                        (Math.floor(props.armhole * (props.sts / 4)) * 2) + " " 
            } stitches.</p>
            {props.hem == 1 ? <p>Knit in 1x1 ribbing until your panel measures {selectedUnits.units === "metric" ? 
                        props.sleeveRibbing + " centimeters " :
                        props.sleeveRibbing + " inches "
                      }long from the bottom edge. Make sure to end with a WS row. </p> 
                      : <></>}
            {props.hem == 2 ? <><p>Knit {Math.floor(props.rows / 2)} rows in stockinette stitch.</p> 
                      <p>* Next, insert your right needle into the first stitch on your left needle.</p>
                      <p>Then insert you right needle into the cast-on edge loop parallel to first stitch on your left needle.</p>
                      <p>Knit the two stitches together.</p>
                      <p>Repeat from * until you've knit all your stitches together with their corresponding edge loop, and you have no stitches left on your left needle. This completes the folded hem.</p>
                      <p>If needed, <a href = "https://www.youtube.com/watch?v=J_S_P06ok6o&ab_channel=PipandPin" target="_blank" rel="noreferrer noopener">here is a video tutorial.</a></p>
                      </>
                      : <></>}
            <p>Knit in stockinette stitch until your sleeve measures {selectedUnits.units === "metric" ? 
                        (props.sleeve - ((props.chest - props.shoulder) / 2)) + " centimeters " :
                        (props.sleeve - ((props.chest - props.shoulder) / 2)) + " inches "
                      }long from the bottom edge. Make sure to end with a WS row.</p>
            <p>Cast off.</p>
            <p>Repeat these steps a second time to make the other sleeve.</p>
            <p>(Note: Your finished sleeve length maybe shorter than the desired sleeve length measurement you specified earlier. This is intended. Because the nature of the drop shoulder, the part of the sweater body that extends past your shoulder will add length to your sleeves to make up the difference.)</p>

            <h2 style = {{fontWeight: "bold", marginTop: "1.5em"}}>ASSEMBLY</h2>
            <p>You should have 4 total completed pieces: 1 front panel, 1 back panel, and 2 sleeve panels.</p>
            <p>Lay your back piece down with the WS facing up towards you, and lay the front panel on top of it with the WS facing down. </p>
            <p>First, you will sew the shoulder seams.</p>
            <p>Starting from the top left corner, sew from left to right until your seam is {selectedUnits.units === "metric" ? 
            ((props.chest - props.neck) / 2) + " centimeters long." : " inches long."} </p>
            <p>Starting from the top right corner, sew from right to left until your seam is {selectedUnits.units === "metric" ? 
            ((props.chest - props.neck) / 2) + " centimeters long." : " inches long."} </p>
            <p>Both of your shoulder seams are now complete, and the hole left is the neck opening.</p>
            <p>Next, starting from the body hem, sew the front panel to the back panel at the sides. Stop sewing each side seam when it reaches {Math.floor(props.length - props.armhole)}
            {selectedUnits.units === "metric" ? 
                        " centimeters " : 
                        " inches "
                        }long.</p>
            <p>Both of your side seams are now complete, and the holes left are the armholes.</p>
            <p>Take one of the sleeve pieces and sew it into the armhole, working from the armpit to the top of the shoulder, and then down the other armhole side ending back at the armpit.</p>
            <p>Repeat this step with the other sleeve.</p>
            <p>Lastly, sew the underarm seam together for each armpit, starting from the armpit and ending at the hem.</p>
            <p>Make sure to secure all sewing done with a few knots, and weave in all your ends.</p>
            <p>Congrats, you're sweater is complete!</p>
        </div>

        <Link to="/hem"><Button variant="dark">Back</Button></Link>
    </>
  );
}