import { connect } from "react-redux";
import ResolvedParts from "../Components/ResolvedParts";
import {removePart} from "../actions";


function mapStateToProps(state) {
  return {
    parts: state.parts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removePart: function (id) {
      dispatch(removePart(id));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ResolvedParts);
