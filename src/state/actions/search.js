import axios from "axios";

export const searchRequested = searchQuery => {
  return dispatch => {
    axios
      .get(`https://api.github.com/search/users?q=${searchQuery}`)
      .then(({ data: { items: results } }) => {
        dispatch(searchRequestSucceeded(results));
      })
      .catch(error => {
        console.log("ERROR", error);
      });
  };
};

export const searchRequestSucceeded = results => {
  return {
    type: "SEARCH_SUBMIT_SUCCESS",
    results
  };
};
