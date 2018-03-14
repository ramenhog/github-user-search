const initialState = {
  results: [],
  searchQuery: "",
  page: 1,
  totalResults: null
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_REQUEST": {
      const { searchQuery } = action.data;
      return {
        ...state,
        searchQuery
      };
    }
    case "SEARCH_REQUEST_SUCCESS": {
      const { results, page, totalResults } = action.data;
      return {
        ...state,
        results,
        page,
        totalResults
      };
    }
    default: {
      return state;
    }
  }
};

export default searchReducer;
