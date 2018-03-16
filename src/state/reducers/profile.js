const initialState = {
  user: [],
  isLoading: false
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
    default: {
      return state;
    }
  }
};

export default profileReducer;
