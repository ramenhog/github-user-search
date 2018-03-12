export const searchRequested = searchQuery => {
  return {
    type: "SEARCH_SUBMIT_SUCCESS",
    searchQuery
  };
};
