import React from "react";
import {Link} from "react-router-dom";
import SearchPartsContainer from "../Containers/SearchPartsContainer";

function LabelParts(props) {

  let partDivs = null;
  if (props.parts) {
    partDivs = props.parts;
  }
  const labelParts = [];
  for (let m=0; m<partDivs.length; m++) {
    let thisPart = partDivs[m];
    console.log("partDivs[" + m + "]: " + thisPart);
    if (thisPart.status === "Needs label") {
      labelParts.push(thisPart);
    }
  }
  console.log(props.parts)
  return (
    <div>
      <div style={{float: "right", width: "49%"}}>
      {labelParts.map((p,i) =>
          <div key={i} id="part">
            <br />  <div><b>Part number:</b> {p.partNumber}</div>
            <br />  <div><b>Location: </b> {p.location}</div>
            <br />  <div><b>On Hand: </b> {p.onHand}</div>
            <br />  <div><b>Status: </b> {p.status}</div>
              <Link to={"/parts/" + p._id}> View/Edit </Link>
              <button onClick={
                (e) => {
                    props.removePart(p._id);
                }
              }>Delete</button>

          </div>
          )}
        </div>
        <div style={{float: "right", width: "49%"}}>
          <SearchPartsContainer />
        </div>
    </div>
  );
}
export default LabelParts;
