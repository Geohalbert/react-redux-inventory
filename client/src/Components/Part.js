import React, { Component } from "react";
import {Link} from "react-router-dom";


class Part extends Component {

    componentDidMount() {
      let thisId = this.props.match.params.id;
      this.props.getPart(thisId);
    }

    render() {
      console.log(this.props.part);
      console.log(this.props.match.params.id);
      return (
        <div>
          <div><b>Part Number:</b> {this.props.part.partNumber}</div>
          <div><b>Location: </b> {this.props.part.location}</div>
          <div><b>On Hand: </b> {this.props.part.onHand}</div>
          <div><b>Status: </b> {this.props.part.status}</div>
          <Link to={"/editparts/" + this.props.part._id}> Edit </Link>
        </div>
      );
    }
  }
export default Part;
