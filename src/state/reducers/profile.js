const initialState = {
  user: [],
  isLoading: false,
  repos: [],
  followers: []
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_REQUEST": {
      return {
        ...state,
        isLoading: true
      };
    }
    case "USER_REQUEST_SUCCESS": {
      const { user } = action.data;
      return {
        ...state,
        user,
        isLoading: false
      };
    }
    case "FOLLOWERS_REQUEST_SUCCESS": {
      const { followers } = action.data;
      return {
        ...state,
        followers,
        isLoading: false
      };
    }
    case "REPO_REQUEST_SUCCESS": {
      const { repos } = action.data;
      return {
        ...state,
        repos,
        isLoading: false
      };
    }
    default: {
      return state;
    }
  }
};

export default profileReducer;
