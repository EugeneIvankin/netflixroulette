import { GET_MOVIES_SUCCESS, GET_MOVIES_ERR, SORT_MOVIES } from '../constants/SearchMovies';
import { status } from './checkStatus';


const urlGetPopMovies = 'https://api.themoviedb.org/3/movie/popular?api_key=32222e52f3ed54debf15b9c2ece6c852&language=en-US&page=1';
const urlGetMoviesByName = name => `https://api.themoviedb.org/3/search/movie?api_key=32222e52f3ed54debf15b9c2ece6c852&language=en-US&query=${name}&page=1&include_adult=false`;

export function sortMovies(typeOfSort) {
  return {
    type: SORT_MOVIES,
    payload: typeOfSort,
  };
}

function getMoviesSuccess(movies) {
  return {
    type: GET_MOVIES_SUCCESS,
    payload: movies.results,
  };
}

function getMoviesErr() {
  return {
    type: GET_MOVIES_ERR,
  };
}

function getMovies(dispath, url) {
  fetch(url)
    .then(status)
    .then(json => json.json())
    .then(json => dispath(getMoviesSuccess(json)))
    .catch(ex => dispath(getMoviesErr(ex)));
}

export function getMoviesByName(name) {
  return (dispatch) => {
    getMovies(dispatch, urlGetMoviesByName(name));
  };
}

export function getPopMovies() {
  return (dispatch) => {
    getMovies(dispatch, urlGetPopMovies);
  };
}
