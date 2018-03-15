import React, { Component } from "react";
import { parse } from "qs";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
import Header from "../../components/Header";

import "./SearchResults.scss";

class SearchResults extends Component {
  componentWillMount() {
    const { location, searchRequested, history } = this.props;
    const query = parse(location.search.substr(1));

    if (query.q) {
      const pageNum = parseInt(query.page, 10);
      searchRequested(query.q, pageNum);
    } else {
      history.push("/");
    }
  }

  componentWillUpdate(nextProps) {
    const { location: { search: nextSearch } } = nextProps;
    const { location: { search: thisSearch }, searchRequested } = this.props;

    if (thisSearch !== nextSearch) {
      const nextQuery = parse(nextSearch.substr(1));
      searchRequested(nextQuery.q, parseInt(nextQuery.page, 10));
    }
  }

  render() {
    const {
      search: { results = [], page, searchQuery, totalResults }
    } = this.props;
    const paginationUrl = `/results?q=${searchQuery}`;

    return (
      <div className="search-results">
        <Header />
        <h1>Search Results:</h1>
        <div className="search-results__container">
          {results.map((result, i) => (
            <Link
              to={`/user/${result.login}`}
              className="search-results__item"
              key={i}
            >
              <img
                className="search-results__avatar"
                src={result.avatar_url}
                alt={result.login}
              />
              <h2>{result.login}</h2>
            </Link>
          ))}
        </div>
        <Pagination
          rootUrl={paginationUrl}
          currentPage={page}
          totalResults={totalResults}
        />
      </div>
    );
  }
}

export default SearchResults;
