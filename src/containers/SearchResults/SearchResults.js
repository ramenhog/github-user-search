import React, { Component } from "react";
import { parse } from "qs";
import { Link } from "react-router-dom";

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
    const nextPage = page + 1;
    const prevPage = page - 1;
    const firstPage = 1;
    const lastPage = Math.ceil(totalResults / 50);

    return (
      <div>
        {prevPage > 0 ? (
          <div>
            <Link to={`${paginationUrl}&page=${firstPage}`}>{firstPage}</Link>
            <Link to={`${paginationUrl}&page=${prevPage}`}>&lt;</Link>
          </div>
        ) : null}
        {lastPage >= nextPage ? (
          <div>
            <Link to={`${paginationUrl}&page=${nextPage}`}>&gt;</Link>
            <Link to={`${paginationUrl}&page=${lastPage}`}>{lastPage}</Link>
          </div>
        ) : null}
        {results.map((result, i) => (
          <div key={i}>
            <img src={result.avatar_url} width="200" />
            <h2>{result.login}</h2>
            {result.html_url}
          </div>
        ))}
      </div>
    );
  }
}

export default SearchResults;
