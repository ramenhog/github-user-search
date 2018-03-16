import axios from "axios";

export const userRequested = username => {
  return dispatch => {
    dispatch({
      type: "USER_REQUEST"
    });

    axios
      .get(`https://api.github.com/users/${username}`, {
        auth: {
          username: process.env.REACT_APP_GITHUB_USERNAME,
          password: process.env.REACT_APP_GITHUB_TOKEN
        }
      })
      .then(({ data }) => {
        dispatch(userRequestSucceeded(data));
      });
  };
};

export const userRequestSucceeded = user => {
  return {
    type: "USER_REQUEST_SUCCESS",
    data: {
      user
    }
  };
};
