import React, { Component } from "react";
import {Input, Button, Dropdown,Grid} from "semantic-ui-react";

class EditPart extends Component {
  constructor() {
    super();
    this.state = {
        // initialLocation: "",
        // initialOnHand: 0,
        // initialStatus: "",
        // newLocation: "",
        // newOnHand: 0,
        // newStatus: "",
        fieldsVisible: true,
        partNumberFlagVisible: false,
        locationEditFlagVisible: false,
        onHandEditFlagVisible: false,
        errorEditFlagVisible: false,
        successEditFlagVisible: false,
      part: {
        _id: null,
        partNumber: "",
        location: "",
        onHand: null,
        status: ""
        // memos: []
      },
    };
  }

  componentDidMount() {
    const thisId = this.props.match.params.id;
    const thisPart = this.props.getPart(thisId);
    console.log("thisPart: ", thisPart);
    const part = { _id: thisPart._id,
                    partNumber: thisPart.partNumber,
                    location: thisPart.location,
                    onHand: thisPart.onHand,
                    status: thisPart.status
                    // memos: tempPart[0].memos
                     };

    this.setState({
      // initialLocation: tempPart[0].location,
      // initialOnHand: tempPart[0].onHand,
      // initialStatus: tempPart[0].status,
      fieldsVisible: true,
      part: Object.assign(this.state.part,part)
    })
    console.log("this.state.part: ",this.state.part);
  }

  statusSelect = (e, { value }) => {
    let part = {status: value};
    this.setState({
      part: Object.assign(this.state.part,part)
    });

  }

  render() {
    // let initialLocation = this.state.part.location;
    // let initialOnHand = this.state.part.onHand;
    // let initialStatus = this.state.part.status;
    //
    // console.log("initialLocation: ",initialLocation);
    // console.log("initialOnHand: ",initialOnHand);
    // console.log("initialStatus: ",initialStatus);
    // let partNumbers = [];
    //     partNumbers = this.props.parts.map(function(p){
    //         return {
    //             text: p.partNumber,
    //             value: p.partNumber
    //         }
    //     });


    const part = { _id: this.props.part._id,
                    partNumber: value,
                    location: tempPart[0].location,
                    onHand: tempPart[0].onHand,
                    status: tempPart[0].status
                    // memos: tempPart[0].memos
                     };
    this.setState({
      // initialLocation: tempPart[0].location,
      // initialOnHand: tempPart[0].onHand,
      // initialStatus: tempPart[0].status,
      fieldsVisible: true,
      part: Object.assign(this.state.part,part)
    })
    console.log("this.state.part: ",this.state.part);
    let locationEditFlag = "";
    if (this.state.locationEditFlagVisible === true ){
      locationEditFlag= "Please enter a valid location (letters only)";
    }
    else{
      locationEditFlag= "";
    }
    let onHandEditFlag = "";
    if (this.state.onHandEditFlagVisible === true ){
      onHandEditFlag= "Please enter a valid On Hand (numbers only)";
    }
    else{
      onHandEditFlag= "";
    }
    let errorEditFlag = "";
    if (this.state.errorEditFlagVisible === true ){
      errorEditFlag= "Cannot edit part. Please fix error first and make sure all fields are populated.";
    }
    else{
      errorEditFlag= "";
    }
    let successEditFlag = "";
    if (this.state.successEditFlagVisible === true ){
        successEditFlag= "Part Successfully Edited";
    }
    else{
        successEditFlag= "";
    }
    let changeFields = "";
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
    if (this.state.fieldsVisible){
        changeFields = <div>
                            <div>
                                <center>Location:</center><Input placeholder="Letters Only" value={this.state.part.location} onChange={(e) => {
                                    const part = {location: e.target.value,};
                                    this.setState({
                                        part: Object.assign(this.state.part,part)
                                    });
                                  if ((/^[0-9]+$/.test(e.target.value) || /^[0-9]+[a-zA-Z\s]/.test(e.target.value))|| e.target.value === ""){
                                        this.setState({
                                        // newLocation: e.target.value,
                                        locationEditFlagVisible: false,
                                        });
                                    }
                                    else{
                                        this.setState({
                                        locationEditFlagVisible: true
                                        });
                                    }
                                }} />
                            </div>
                            {locationEditFlag}
                            <div>
                                <center>On Hand:</center><Input placeholder="Number" value={this.state.part.onHand} onChange={(e) => {
                                    const part = {onHand: e.target.value,};
                                        this.setState({
                                            part: Object.assign(this.state.part,part)
                                        });
                                    if ((/^[0-9]+$/.test(e.target.value) && e.target.value.length < 100) || e.target.value === ""){
                                        this.setState({
                                            // newOnHand: e.target.value,
                                            onHandEditFlagVisible: false,
                                        });
                                        }
                                        else{
                                        this.setState({
                                            onHandEditFlagVisible: true
                                        });
                                    }
                                }} />
                            </div>
                            {onHandEditFlag}
                            <div>
                              <center>Status:</center><Dropdown placeholder={this.state.part.status} fluid selection onChange={this.statusSelect} options={statusFields} />
                              </div>
                    </div>
    }


    return (

      <div>
          <Grid centered>
            <Grid.Row>
            </Grid.Row>

                <Grid.Column computer={2} tablet={2} mobile={2}>
                    <div>
                    <h2>Edit Part</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        if (this.props.updatePart &&
                        this.state.onHandEditFlagVisible === false && this.state.locationEditFlagVisible === false  &&
                        this.state.part.onHand !== "" && this.state.part.location !== "") {
                          // let memoArr = this.state.part.memos;
                          // let newMemoNumber = (memoArr.length)+1;
                          // let newMemo = {
                          //   entry: newMemoNumber,
                          //   initialLocation: this.state.initialLocation,
                          //   initialOnHand: this.state.initialOnHand,
                          //   initialStatus: this.state.initialStatus,
                          //   newLocation: this.state.newLocation,
                          //   newOnHand: this.state.newOnHand,
                          //   newStatus: this.state.newStatus
                          // }
                          // memoArr.push(newMemo);

                            this.props.updatePart(this.state.part);
                            this.setState({
                                errorEditFlagVisible: false,
                                successEditFlagVisible: true
                            });
                        }
                        else{
                            this.setState({
                                errorEditFlagVisible: true,
                                successEditFlagVisible: false
                                });
                        }
                        }
                    }>
                        <div><b>Part Number:</b> {this.state.part.partNumber}</div>
                        {changeFields}
                        <div><center><Button>Edit</Button></center></div>
                        {errorEditFlag}
                        {successEditFlag}
                    </form>
                </div>
            </Grid.Column>
        </Grid>
    </div>

    );
  }
}
export default EditPart;
