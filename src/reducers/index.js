const initialState = {
  musicList: []
};

function rootReducer(state = initialState, action) {
  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      musicList: action.payload
    });
  }
  if (action.type === "SEARCH_MUSIC") {
    return Object.assign({}, state, {
       musicList: action.payload
    });
  }
  return state;
}

export default rootReducer;
