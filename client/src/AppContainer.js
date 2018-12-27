import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadParts} from "./actions/index";

function mapDispatchToProps(dispatch) {
  return {
    loadParts: function () {
      dispatch(loadParts())
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
