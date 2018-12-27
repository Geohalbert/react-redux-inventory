import { connect } from 'react-redux';
import {setSearchText} from "../actions";
import SearchParts from "../Components/SearchParts";

// function mapStateToProps(state) {
//   return {
//     parts: state.parts,
//   };
// }

function mapDispatchToProps(dispatch){
  return {
    set: function (txt) {
      dispatch(setSearchText(txt));
    }
  }
}

export default connect(null,mapDispatchToProps)(SearchParts);
