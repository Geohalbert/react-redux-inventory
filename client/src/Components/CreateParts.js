import React from "react";
import {Input, Button, Dropdown} from "semantic-ui-react";

class CreateParts extends React.Component {
  constructor() {
    super();
    this.state = {
      partNumberFlagVisible: false,
      locationFlagVisible: false,
      onHandFlagVisible: false,
      errorFlagVisible: false,
      successFlagVisible: false,
      part: {
        _id: 0,
        partNumber: "",
        location: "",
        onHand: 0,
        status: ""
      }
    };
  }

  statusSelect = (e, { value }) => {
    let part = {status: value};
    this.setState({
      part: Object.assign(this.state.part,part)
    });

  }

  render() {
    let partNumberFlag = "";
    if (this.state.partNumberFlagVisible === true ) {
      partNumberFlag = "Please enter a part number";
    }
    else {
      partNumberFlag = "";
    }
    let locationFlag = "";
    if (this.state.locationFlagVisible === true ){
      locationFlag = "Please enter a bin location";
    }
    else {
      locationFlag = "";
    }
    let onHandFlag = "";
    if (this.state.onHandFlagVisible === true ){
      onHandFlag= "Please enter numbers only";
    }
    else {
      onHandFlag = "";
    }
    let errorFlag = "";
    if (this.state.errorFlagVisible === true ){
      errorFlag = "Cannot create. Please fix errors first and make sure all fields are populated.";
    }
    else {
      errorFlag = "";
    }
    let successFlag = "";
    if (this.state.successFlagVisible === true ){
      successFlag = "Part Created Successfully!";
    }
    else {
      successFlag = "";
    }

    const statusFields = [
      {
          text: "Missing",
          value: "Missing"
      },
      {
          text: "Needs label",
          value: "Needs label"
      },
      {
          text: "Resolved",
          value: "Resolved"
      },
    ]

    return (
      <div>
        <div>
          <h2>Create Part</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.state.partNumberFlagVisible === false && this.state.locationFlagVisible === false && this.state.onHandFlagVisible === false && this.state.part.partNumber !== "" && this.state.part.location !== "" && this.state.part.onHand !== "" &&
              this.state.part.status !== "") {
              this.props.createPart(this.state.part);
              this.setState({
                      errorFlagVisible: false,
                      successFlagVisible: true
                    });
            }
            else{
              console.log("this.props.createPart: ",this.props.createPart);
              console.log("this.state.partNumberFlagVisible: ",this.state.partNumberFlagVisible);
              console.log("this.state.locationFlagVisible: ",this.state.locationFlagVisible);
              console.log("this.state.onHandFlagVisible: ", this.state.onHandFlagVisible);
              console.log("this.state.part.partNumber: ", this.state.part.partNumber);
              console.log("this.state.part.location: ",this.state.part.location);
              console.log("this.state.part.onHand: ",this.state.part.onHand);
              console.log("this.state.part.status: ",this.state.part.status);
              console.log("",);
              console.log("",);
              console.log("",);
              console.log("",);
              this.setState({
                      errorFlagVisible: true,
                      successFlagVisible: false
                    });
            }
          }}>
            <div>
            <center>Part Number:</center><Input placeholder="8 Digit Number" onChange={(e) => {
                if ((/^[0-9]+$/.test(e.target.value) && e.target.value.length === 8) || e.target.value === ""){
                  console.log("part Number success");
                  const part = {partNumber: e.target.value};
                  this.setState({
                    partNumberFlagVisible: false,
                    part: Object.assign(this.state.part,part)
                  });
                }
                else{
                  console.log("part number error")
                    this.setState({
                      partNumberFlagVisible: true
                    });
                  }
              }} />
            </div>
            {partNumberFlag}
            <div>
              <center>Bin location:</center><Input placeholder="Numbers and/or letters" onChange={(e) => {
                if ((/^[0-9]+$/.test(e.target.value) || /^[0-9]+[a-zA-Z\s]/.test(e.target.value))|| e.target.value === ""){
                  console.log("location success");
                  const part = {location: e.target.value};
                  this.setState({
                    locationFlagVisible: false,
                    part: Object.assign(this.state.part,part)
                  });
                }
                else{
                  console.log("location error");
                  this.setState({
                    locationFlagVisible: true
                    });
                }
              }} />
            </div>
            {locationFlag}
            <div>
            <center>On Hand:</center><Input placeholder="Enter quantity" onChange={(e) => {
                if ((/^[0-9]+$/.test(e.target.value) && e.target.value.length < 100) || e.target.value === ""){
                  console.log("On Hand success");
                  const part = {onHand: e.target.value};
                  this.setState({
                    onHandFlagVisible: false,
                    part: Object.assign(this.state.part,part)
                  });
                }
                else{
                  console.log("on Hand error")
                    this.setState({
                      onHandFlagVisible: true
                    });
                  }
              }} />
            </div>
            {onHandFlag}
            <div className="dropdown" style={{width: "25%"}}>
            <center>Status:</center><Dropdown placeholder="Select status" fluid selection onChange={this.statusSelect} options={statusFields} />
            </div>
            <div><center><Button>Create</Button></center></div>
            {errorFlag}
            {successFlag}
          </form>
        </div>
      </div>

    );
  }
}
export default CreateParts;
