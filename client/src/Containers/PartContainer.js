import { connect } from "react-redux";
import Part from "../Components/Part";
import {getPart} from "../actions";

function mapStateToProps(state) {
  return {
    part: state.part
  };
}

function mapDispatchToProps(dispatch) {
    return {
      getPart: function (id) {
        dispatch(getPart(id));
      }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Part);
