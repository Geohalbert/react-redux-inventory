import {combineReducers} from "redux";

function parts(state = [], action) {
  if (action.type === "PARTS_LOADED") {
    return action.value;
  }
  return state;
}

function part(state = [], action) {
  if (action.type === "GET_PART_DONE") {
    return action.value;
  }
  return state;
}
function searchText(state = "", action) {
  if (action.type === "SET_SEARCH_TEXT") {
    return action.value;
  }
  return state;
}
const rootReducer = combineReducers({
  parts,part,searchText
});
export default rootReducer;
