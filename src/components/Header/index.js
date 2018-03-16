import React from "react";
import SearchForm from "../SearchForm";
import {Link } from "react-router-dom";
import "./Header.scss";

const Header = props => {
  const { searchRequested } = props;

  const handleSubmit = values => {
    const { search: searchQuery } = values;
    searchRequested(searchQuery);
  };

  return (
    <nav className="header">
      <Link to="/" className="heading-3">GitHub User Search</Link>
      <SearchForm onSubmit={handleSubmit} />
    </nav>
  );
};

export default Header;
