import React, { Component } from "react";
import { parse } from "qs";

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
      <div>
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
