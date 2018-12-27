import React from "react";
import {Link} from "react-router-dom";

function Parts(props) {

  let partDivs = null;
  if (props.parts) {
    partDivs = props.parts;
  }
  // console.log(props.parts)
  return (
    <div>
      {partDivs.map((u,i) =>
          <div key={i} id="part">
          <br />  <div><b>Part number:</b> {u.partName}</div>
          <br />  <div><b>Available: </b> {u.isPlaying}</div>
          <br />  <div><b>Wins:</b> {u.wins}</div>
          <br />  <div><b>Losses:</b> {u.losses}</div>
            <Link to={"/parts/" + u._id}> View </Link>
            <button onClick={
              (e) => {
                  props.removePart(u._id);
              }
            }>Delete</button>

          </div>
          )}
    </div>
  );
}
export default Parts;
