import { FETCH_MOVIES } from "./types";

export const fetchMovies = () => dispatch => {
  console.log("request made to fetch movies");
  // const res = await axios.get(
  //   "http://www.omdbapi.com/?i=tt3896198&apikey=99c73fcc"
  // );

  dispatch({
    type: FETCH_MOVIES,
    payload: null //res.Search
  });
};
