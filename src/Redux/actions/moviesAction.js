/** @format */

import axios from "axios";
import { ALLMOVIES, MOVIEDITELS, MOVIEPAGE, MoviesApi, MOVIESEARCH } from "../type/tpye";

export const getAllMovies = () => {
  return async (dispatch) => {
    const res = await axios.get(MoviesApi);
    // console.log(res.data.results);

    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};


export const getAllMovieSearch = (word) => {
  return async (dispatch) => {
    const res = await axios.get(MOVIESEARCH(word));
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};


export const getpage = (page) => {
  return async (dispatch) => {
    const res = await axios.get( MOVIEPAGE(page) );
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};


export const getDitalesMovie = (id) => {
  return async (dispatch) => {
    const res = await axios.get(MOVIEDITELS(id));
    dispatch({
      type: ALLMOVIES,
      ditalsMovie: res.data,
      // pages: res.data.total_pages,
    });
    // console.log(res.data)
  };
};




