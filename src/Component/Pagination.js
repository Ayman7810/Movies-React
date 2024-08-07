/** @format */

import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getpage } from "../Redux/actions/moviesAction";

const Pagination = () => {
  const [totalPages, setTotalPages] = useState(10);

  const dispatchAllMoveis = useDispatch();
  const total = useSelector((state) => state.pageCount);

  useEffect(() => {
    setTotalPages(total);
  }, []);

  const pageCount = totalPages;
  const handelPageClick = (data) => {
    dispatchAllMoveis(getpage(data.selected + 1));
  };
  return (
    <div className="container" >
      <div className="row  my-4 font">
        <div className="col-12 ">
          <ReactPaginate
            breakLabel="..."
            nextLabel="التالي"
            pageRangeDisplayed={0}
            previousLabel="السابق"
            marginPagesDisplayed={1}
            pageCount={pageCount}
            onPageChange={handelPageClick}
            containerClassName="pagination d-flex flex-wrap  justify-content-center pe-0"
            pageClassName={"page-item"}
            pageLinkClassName={"page-link fs-5"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link fs-5"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link fs-5"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link fs-5"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
