import React, { Component } from "react";
import "./App.css";
import Main from "./Components/Main";
import Part from "./Containers/PartContainer";
import Parts from "./Containers/PartsContainer";
import MissingParts from "./Containers/MissingPartsContainer";
import ResolvedParts from "./Containers/ResolvedPartsContainer";
import LabelParts from "./Containers/LabelPartsContainer";
import CreateParts from "./Containers/CreatePartsContainer";
import EditPart from "./Containers/EditPartContainer";
import EditParts from "./Containers/EditPartsContainer"
import {Link} from "react-router-dom";
import {BrowserRouter,Route,Switch} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {parts: []};
  }
  componentDidMount() {
    console.log("app this.props: ",this.props)
    this.props.loadParts();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
        <center>
          <div id="head">
		    
              <img className="logo_img" src="http://media-dmg.assets-cdk.com/teams/repository/export/v/2/768/24e9889b410058274005056925fd3/76824e9889b410058274005056925fd3_700x0.jpg" />
            
			<div style={{width: "33%"}}><h1>Parts Inventory</h1></div>
			<div id="links">
			  <div>
				<Link to="/"><b>Main</b></Link>
			  </div>			 
			  <div id="categories">
			    {/* <br /> <Link to="/parts"><b>List Parts</b></Link> */}
			    <Link to="/missingparts"><b>Missing Parts</b></Link>
			    <Link to="/labelparts"><b>Label Parts</b></Link>
				<Link to="/resolvedparts"><b>Resolved Parts</b></Link>
				<Link to="/createpart"><b>Create Part</b></Link>
				{/* <Link to="/editparts"><b>Edit Part</b></Link> */}
			  </div>
			</div>
		  </div>
		  <div>
			  <Switch>
				<Route path="/parts/:id" component={Part} />
				<Route path="/parts" component={Parts} />
				<Route path="/missingparts" component={MissingParts} />
				<Route path="/labelparts" component={LabelParts} />
				<Route path="/resolvedparts" component={ResolvedParts} />
				<Route path="/createpart" component={CreateParts} />
				<Route path="/editParts/:id" component={EditParts} />
				<Route path="/" component={Main} />
			  </Switch>
          </div>
          </center>
        </div>
      </BrowserRouter>
    );
  }
}
export default (App);
