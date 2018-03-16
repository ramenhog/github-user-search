import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../state/actions/search";
import SearchForm from "./SearchForm";

const Search = props => {
  const { searchRequested, search: { page } } = props;

  const handleSubmit = values => {
    const { search: searchQuery } = values;
    searchRequested(searchQuery, page);
  };

  return (
    <div>
      <header>GITHUB USER SEARCH</header>
      <SearchForm onSubmit={handleSubmit} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    search: state.search
  };
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators(actions, dispatch);
};

const SearchContainer = connect(mapStateToProps, mapDispatchToProp)(Search);

export default SearchContainer;
