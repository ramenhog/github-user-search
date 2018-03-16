import React from "react";
import { Link } from "react-router-dom";
import "./Pagination.scss";

const Pagination = props => {
  const { currentPage, rootUrl, totalResults } = props;
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;
  const firstPage = 1;
  const lastPage = Math.ceil(totalResults / 50);

  return (
    <div className="pagination">
      {prevPage > 0 ? (
        <span className="pagination__previous">
          <Link
            className="pagination__item"
            to={`${rootUrl}&page=${firstPage}`}
          >
            {" "}
            First{" "}
          </Link>
          <Link className="pagination__item" to={`${rootUrl}&page=${prevPage}`}>
            {" "}
            Previous{" "}
          </Link>
        </span>
      ) : null}
      {lastPage >= nextPage ? (
        <span className="pagination__next">
          <Link className="pagination__item" to={`${rootUrl}&page=${nextPage}`}>
            {" "}
            Next{" "}
          </Link>
          <Link className="pagination__item" to={`${rootUrl}&page=${lastPage}`}>
            {" "}
            Last{" "}
          </Link>
        </span>
      ) : null}
    </div>
  );
};

export default Pagination;
