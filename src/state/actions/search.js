import axios from "axios";
import { history } from "../configureStore";

export const searchRequested = searchQuery => {
  return dispatch => {
    axios
      .get(`https://api.github.com/search/users?q=${searchQuery}`)
      .then(({ data: { items: results } }) => {
        dispatch(searchRequestSucceeded(results));
        history.push({
          pathname: "/results",
          search: `?q=${searchQuery}`
        });
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
