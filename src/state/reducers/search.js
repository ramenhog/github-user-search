const initialState = {
  results: [],
  searchQuery: "",
  pagination: null
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_SUBMIT_SUCCESS": {
      const { results } = action;
      return {
        ...state,
        results
      };
    }
    default: {
      return state;
    }
  }
};

export default searchReducer;
