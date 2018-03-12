const initialState = {
  results: [],
  searchQuery: "",
  pagination: null
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_SUBMIT_SUCCESS": {
      console.log("yay", action.searchQuery);
      return state;
    }
    default: {
      return state;
    }
  }
};

export default searchReducer;
