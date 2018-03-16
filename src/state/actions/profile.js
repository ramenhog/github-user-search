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
        dispatch(followersRequest(data.followers_url));
        dispatch(repoRequest(data.repos_url));
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

export const followersRequest = followersUrl => {
  return dispatch => {
    dispatch({
      type: "FOLLOWERS_REQUEST"
    });
    axios.get(followersUrl).then(({ data: followers }) => {
      dispatch(followersRequestSucceeded(followers));
    });
  };
};

export const followersRequestSucceeded = followers => {
  return {
    type: "FOLLOWERS_REQUEST_SUCCESS",
    data: {
      followers
    }
  };
};

export const repoRequest = url => {
  return dispatch => {
    dispatch({
      type: "REPO_REQUEST"
    });
    axios.get(url).then(({ data: repos }) => {
      dispatch(repoRequestSucceeded(repos));
    });
  };
};

export const repoRequestSucceeded = repos => {
  return {
    type: "REPO_REQUEST_SUCCESS",
    data: {
      repos
    }
  };
};
