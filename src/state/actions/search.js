import axios from "axios";
import { history } from "../configureStore";

export const searchRequested = (searchQuery, page = 1) => {
  return dispatch => {
    dispatch({
      type: "SEARCH_REQUEST",
      data: {
        searchQuery
      }
    });
    const queryString = `?q=${searchQuery}&page=${page}`;
    axios
      .get(`https://api.github.com/search/users${queryString}&per_page=50`, {
        auth: {
          username: process.env.REACT_APP_GITHUB_USERNAME,
          password: process.env.REACT_APP_GITHUB_TOKEN
        }
      })
      .then(({ data }) => {
        const { items: results, total_count: totalResults } = data;
        dispatch(searchRequestSucceeded(results, page, totalResults));
        history.push({
          pathname: "/results",
          search: queryString
        });
      })
      .catch(error => {
        console.log("ERROR", error);
      });
  };
};

export const searchRequestSucceeded = (results, page, totalResults) => {
  return {
    type: "SEARCH_REQUEST_SUCCESS",
    data: {
      results,
      page,
      totalResults
    }
  };
};
