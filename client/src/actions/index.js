export function loadParts() {
  return function (dispatch) {
    fetch("/parts")
    .then( (response) => {
      return response.json();
    }).then((parts) => {
      dispatch(partsLoaded(parts));
    });
  };
}
function partsLoaded(parts) {
  return {
    type: "PARTS_LOADED",
    value: parts
  };
}
export function getPart(id) {
  return function (dispatch) {
    fetch("/parts/" + id)
    .then( (response) => {
      return response.json();
    }).then((part) => {
      dispatch(getPartDone(part));
    });
  };
}
function getPartDone(part) {
  return {
    type: "GET_PART_DONE",
    value: part
  };
}
export function createPart(p) {
  return function (dispatch) {
    fetch("/parts", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(p)
    }).then(() => dispatch(loadParts()));
  };
}
export function updatePart(part) {
  return function (dispatch) {
    fetch("/parts/" + part._id, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(part)
    }).then(() => dispatch(getPart(part._id)));
  };
}

export function removePart(id) {
  return function (dispatch) {
    fetch("/parts/" + id, {
      method: "DELETE"
    }).then(() => dispatch(loadParts()));
  };
}

export function setSearchText(txt) {
  return {
    type: "SET_SEARCH_TEXT",
    value: txt
  };
}
// export function searchParts(txt) {
//   return function (dispatch) {
//     fetch("/parts")
//     .then( (response) => {
//       return response.json();
//     }).then((parts) => {
//       dispatch(partsLoaded(parts));
//     });
//   };
// }
