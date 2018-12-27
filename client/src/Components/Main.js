import React from "react";
import PartsContainer from "../Containers/PartsContainer";
import CreatePartsContainer from "../Containers/CreatePartsContainer";
import SearchPartsContainer from "../Containers/SearchPartsContainer";

function Main() {
  return (
    <div>
      <div style={{float: "left", width: "49%"}}>
        <h1>Parts </h1>
        <PartsContainer />
      </div>
      <div style={{float: "left", width: "49%"}}>
        <div><SearchPartsContainer /></div>
        <div><CreatePartsContainer /></div>
      </div>
    </div>
  );
}
export default Main;
