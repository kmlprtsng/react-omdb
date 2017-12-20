import { FETCH_MOVIES } from "./types";
import axios from "axios";

export const fetchMovies = searchText => async dispatch => {
  //console.log("request made to fetch movies", searchText);
  const res = await axios.get(
    "http://www.omdbapi.com/?i=tt3896198&apikey=99c73fcc"
  );

  dispatch({
    type: FETCH_MOVIES,
    payload: res.Search
  });
};
