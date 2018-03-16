import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <nav>
      <Link to="/">Search again</Link>
      <h3>GitHub User Search</h3>
    </nav>
  );
};

export default Header;
