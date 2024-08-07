/** @format */

import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDitalesMovie } from "../Redux/actions/moviesAction";
const DitalesMovie = () => {
  const pra = useParams();

  const dispatchAllMoveis = useDispatch();

  useEffect(() => {
    dispatchAllMoveis(getDitalesMovie(pra.id));
  }, []);

  const ditalsMovie = useSelector((state) => state.ditals);
  console.log(ditalsMovie);
  return (
    <div className="contaner">
      <div className="row mt-4">
        <div className="col-md-4  col-sm-6 col-12  d-flex justify-content-center justify-content-sm-start">
          <img
            src={"https://image.tmdb.org/t/p/w500" + ditalsMovie?.poster_path}
            className="card-detalis"
            alt=""></img>
        </div>
        <div className="col-md-6  col-sm-6 col-12 mt-4 d-flex align-items-center">
          <div className=" text-center mx-auto">
            <p className="card-text-detalis border-bottom font fs-2">
              اسم الفليم : {ditalsMovie?.title}
            </p>
            <p className="card-text-detalis border-bottom font fs-2">
              تاريخ الفليم : {ditalsMovie?.release_date}
            </p>
            <p className="card-text-detalis border-bottom font fs-2">
              {" "}
              عدد المقيمين : {ditalsMovie?.vote_count}
            </p>
            <p className="card-text-detalis border-bottom font fs-2">
              {" "}
              التقييم : {ditalsMovie?.vote_average}
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 mt-3">
          <div className="card-story d-flex flex-column align-items-start">
            <div className="text-end p-4 pb-0">
              <p className="card-text-title  border-bottom">القصة : </p>
            </div>
            <div className="text-end px-4">
              <p className="card-text-details fs-5">{ditalsMovie?.overview}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 my-2 d-flex justify-content-center">
          <Link to={"/"}>
            <button
              className="btn btn-primary font mx-2"
              style={{ backgroundColor: "#b45b35", border: "none" }}>
              العودة للرئيسية
            </button>
          </Link>
          <a href={ditalsMovie?.homepage}>
            <button
              className="btn btn-primary font mx-2"
              style={{ backgroundColor: "#b45b35", border: "none" }}>
              مشاهدة الفلم
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DitalesMovie;
