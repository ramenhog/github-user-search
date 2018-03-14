import React from "react";
import { Link } from "react-router-dom";

const Pagination = props => {
  const { currentPage, rootUrl, totalResults } = props;
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;
  const firstPage = 1;
  const lastPage = Math.ceil(totalResults / 50);

  return (
    <div>
      {prevPage > 0 ? (
        <span>
          <Link to={`${rootUrl}&page=${firstPage}`}> First </Link>
          <Link to={`${rootUrl}&page=${prevPage}`}> Previous </Link>
        </span>
      ) : null}
      {lastPage >= nextPage ? (
        <span>
          <Link to={`${rootUrl}&page=${nextPage}`}> Next </Link>
          <Link to={`${rootUrl}&page=${lastPage}`}> Last </Link>
        </span>
      ) : null}
    </div>
  );
};

export default Pagination;
