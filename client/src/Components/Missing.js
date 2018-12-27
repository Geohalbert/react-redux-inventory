import React, { Component } from "react";



class Missing extends Component {

    componentDidMount() {
      let id = this.props.match.params.id;
      this.props.getMissing(id);
    }

    render() {
      console.log(this.props.part);
      console.log(this.props.match.params.id);
      return (
        <div>
          <div><b>ID:</b> {this.props.part._id}</div>
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
      );
    }
  }
export default Missing;
