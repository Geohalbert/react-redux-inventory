import React, { Component } from "react";
import {Link} from "react-router-dom";
import {removePart} from "../actions";

class CollapsableMapper extends Component {
  constructor() {
    super();
    this.state = {visible: true};
  }
  render() {
    let buttonText = "Delete";
    let partDivs = "";
    if (this.state.visible) {
      buttonText = "Delete";
      partDivs = this.props.data.map((p,i) => {
        return (
          <div key={i} id="part">
            {p[this.props.field]}
          <br />  {p[this.props.field1]}
          <br />  {p[this.props.field2]}
          {/* <br />  {p[this.props.field3]}
          <br />  {p[this.props.field4]} */}
            <Link to={"/" + this.props.path + "/" + p._id}> View </Link>
            <button onClick={(e) => {
              e.preventDefault();
                this.props.removePart(this.props.match.params.id);
                this.setState({visible: false});
              }
            }
           > Delete </button>
          </div>
        );
      });
    // } else {
    //   buttonText = "Show";
    //   partDivs = "";
    // }
    return (
      <div>
        <button onClick={() => {
          this.setState({
            deleted: !this.state.visible
          });
        }
        }>
          {buttonText}
        </button>
        {partDivs}
      </div>);
  }
}


export default CollapsableMapper;
