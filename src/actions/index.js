export function getMusicData() {
  return function(dispatch) {
    return fetch(
      "https://itunes-search-iypahdbpmn.now.sh/api/search?media=all&term=eminem"
    )
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'DATA_LOADED',
                    payload: json.results });
      });
  };
}

export function setSearchItem(searchVal) {
    return function(dispatch) {
        return fetch(
          `https://itunes-search-iypahdbpmn.now.sh/api/search?media=all&term=${searchVal}`
        )
          .then(response => response.json())
          .then(json => {
            dispatch({ type: 'SEARCH_MUSIC', payload: json.results });
          });
      }; 
}