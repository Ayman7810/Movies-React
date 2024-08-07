/** @format */

import React, { useEffect, useState } from "react";
import CardMove from "./CardMove";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../Redux/actions/moviesAction";

const MoviesLest = () => {
  const [, setDataMovies] = useState([]);

  const dispatchAllMoveis = useDispatch();

  useEffect(() => {
    dispatchAllMoveis(getAllMovies());
  }, []);

  const AllMoveis = useSelector((state) => state.movies);
  useEffect(() => {
    setDataMovies(AllMoveis);
  }, [AllMoveis]);

  return (
    <div className="row mt-4">
      {AllMoveis?.length != null ? (
        AllMoveis.map((item) => {
          return <CardMove key={item.id} item={item} />;
        })
      ) : (
        <div className="alert alert-danger" role="alert">
          هناك خلل في الرابط لا يوجد افلام ...
        </div>
      )}
      {AllMoveis?.length >= 1 ? <Pagination /> : null}
    </div>
  );
};

export default MoviesLest;
