import { connect } from "react-redux";
import EditPart from "../Components/EditParts";
import {
  updatePart,getPart
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
      getPart: function (id) {
        dispatch(getPart(id));
      }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(EditPart);
