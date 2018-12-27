import { connect } from "react-redux";
import Parts from "../Components/Parts";
import {removePart} from "../actions";


function mapStateToProps(state) {
  return {
    parts: state.parts,
    searchFilter: state.searchText,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removePart: function (id) {
      dispatch(removePart(id));
    },
    // setSearchText: function (txt) {
    //   dispatch(setSearchText(txt));
    // }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Parts);
