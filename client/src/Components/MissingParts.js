import React from "react";
import {Link} from "react-router-dom";
import SearchPartsContainer from "../Containers/SearchPartsContainer";

function MissingParts(props) {

  let partDivs = null;
  if (props.parts) {
    partDivs = props.parts.filter(function (p) {
      return !props.searchFilter ||
      (props.searchFilter &&
          p.partNumber.toString().indexOf(props.searchFilter)  > -1) || (props.searchFilter &&
            p.location.toString().indexOf(props.searchFilter)  > -1);
    })
  }
  const missingParts = [];
  for (let m=0; m<partDivs.length; m++) {
    let thisPart = partDivs[m];
    console.log("partDivs[" + m + "]: " + thisPart);
    if (thisPart.status === "Missing") {
      missingParts.push(thisPart);
    }
  }
  console.log(props.parts)
  return (
    <div>
      <div style={{float: "right", width: "49%"}}>
      {missingParts.map((p,i) =>
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
        <div><SearchPartsContainer /></div>
      </div>
  </div>
);
}
export default MissingParts;
