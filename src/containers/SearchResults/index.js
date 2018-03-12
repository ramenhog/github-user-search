import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { parse } from "qs";
import * as actions from "../../state/actions/search";

class SearchResults extends Component {
  componentWillMount() {
    const { location, searchRequested } = this.props;
    const query = parse(location.search.substr(1));

    if (query.q) {
      searchRequested(query.q);
    }
  }

  render() {
    const { results = [] } = this.props;
    return (
      <div>{results.map((result, i) => <h2 key={i}>{result.login}</h2>)}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    results: state.search.results
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

const SearchResultsContainer = connect(mapStateToProps, mapDispatchToProps)(
  SearchResults
);

export default SearchResultsContainer;
