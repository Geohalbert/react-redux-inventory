import { connect } from "react-redux";
import EditParts from "../Components/EditParts";
import {
  updatePart,
} from "../actions";

function mapStateToProps(state) {
  return {
    part: state.part,
    parts: state.parts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updatePart: function (part) {
      dispatch(updatePart(part));
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(EditParts);
