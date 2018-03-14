const initialState = [];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_REQUEST_SUCCESS": {
      const { user } = action.data;
      return user;
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
