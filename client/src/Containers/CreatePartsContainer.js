import { connect } from "react-redux";
import CreateParts from "../Components/CreateParts";
import {createPart} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    createPart: function (part) {
      dispatch(createPart(part));
    }
  };
}

export default connect(null,mapDispatchToProps)(CreateParts);
