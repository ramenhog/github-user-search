import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../state/actions/search";
import SearchForm from "../../components/SearchForm";

const Search = props => {
  const { searchRequested, search: { page } } = props;

  const handleSubmit = values => {
    const { search: searchQuery } = values;
    searchRequested(searchQuery, page);
  };

  return (
    <div className="container container--landing">
      <h1>GitHub User Search</h1>
      <h4>Search for a GitHub user</h4>
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
