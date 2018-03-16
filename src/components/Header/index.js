import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "../../containers/Search/SearchForm";

const Header = props => {
  const { searchRequested } = props;

  const handleSubmit = values => {
    const { search: searchQuery } = values;
    searchRequested(searchQuery);
  };

  return (
    <nav>
      <h3>GitHub User Search</h3>
      <SearchForm onSubmit={handleSubmit} />
    </nav>
  );
};

export default Header;
