import React from "react";
import {Link} from "react-router-dom";
import SearchPartsContainer from "../Containers/SearchPartsContainer";


function Parts(props) {

  let partDivs = null;
  if (props.parts) {
    partDivs = props.parts;
  }
  // console.log(props.parts)
  return (
    <div id="rows">
      <div id="parts" style={{float: "left", width: "49%"}}>
      {partDivs.map((u,i) =>
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
        <div style={{float: "left", width: "49%"}}>
          <SearchPartsContainer />
        </div>
    </div>
  );
}
export default Parts;
