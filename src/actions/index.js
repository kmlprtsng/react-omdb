import { FETCH_MOVIES } from "./types";
import axios from "axios";

export const fetchMovies = searchText => async dispatch => {
  //console.log("request made to fetch movies", searchText);
  const res = await axios.get(
    `http://www.omdbapi.com/?s=${searchText}&apikey=99c73fcc`
  );

  console.log(res);

  dispatch({
    type: FETCH_MOVIES,
    payload: res.data
  });
};
