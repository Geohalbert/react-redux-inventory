import React from "react";
import PartContainer from "../Containers/PartContainer";
import EditPartContainer from "../Containers/EditPartContainer";

function ViewPart() {
  return (
    <div>
      <div style={{float: "left", width: "49%"}}>
        <h1>Part </h1>
        <div><PartContainer /></div>
        <button onClick={() => {
          let editDiv = document.getElementById('edit');
          editDiv.style.visibility = 'hidden';
          }
        }>Edit</button>
      </div>
      <div id="edit" style={{float: "left", width: "49%"}}>
        <h1>Edit </h1>
        <div><EditPartContainer /></div>
      </div>
    </div>
  );
}
export default ViewPart;
