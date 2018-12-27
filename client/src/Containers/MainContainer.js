import Main from "../Components/Main";
import { connect } from "react-redux";
import {loadParts} from "../actions";



function mapDispatchToProps(dispatch) {
  return {
    loadParts: function () {
      dispatch(loadParts());
    },
    // getPart:function(part){
    //       let action = getPart(part);
    //       dispatch(action);
    //     }
  };
}

export default connect(null,mapDispatchToProps)(Main);
