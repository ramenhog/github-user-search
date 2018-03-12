import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../state/actions/search";

let SearchForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name="search" type="text" component="input" />
      <button type="submit">Submit</button>
    </form>
  );
};

SearchForm = reduxForm({
  form: "search"
})(SearchForm);

const Search = props => {
  const { searchRequested } = props;
  return (
    <div>
      <header>GITHUB USER SEARCH</header>
      <SearchForm
        onSubmit={values => {
          searchRequested(values.search);
        }}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchQuery: state.search.searchQuery
  };
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators(actions, dispatch);
};

const SearchContainer = connect(mapStateToProps, mapDispatchToProp)(Search);

export default SearchContainer;
