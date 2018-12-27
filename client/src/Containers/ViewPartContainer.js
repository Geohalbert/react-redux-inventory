import ViewPart from "../Components/ViewPart";
import { connect } from "react-redux";
import {getPart,updatePart} from "../actions";

function mapStateToProps(state) {
  return {
    part: state.part
  };
}

function mapDispatchToProps(dispatch) {
    return {
      getPart: function (id) {
        dispatch(getPart(id));
      },
      updatePart: function (part) {
        dispatch(updatePart(part));
      }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(ViewPart);
