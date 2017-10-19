import {GET_MOVIES_SUCCESS, GET_MOVIES_ERR, SORT_MOVIES} from '../constants/SearchMovies'


const urlGetPopMovies = `https://api.themoviedb.org/3/movie/popular?api_key=32222e52f3ed54debf15b9c2ece6c852&language=en-US&page=1`;
const urlGetMovieByName =(name)=> `https://api.themoviedb.org/3/search/movie?api_key=32222e52f3ed54debf15b9c2ece6c852&language=en-US&query=${name}&page=1&include_adult=false`;


export function getMoviesByName(name) {
    return dispatch => {
        getMovie(dispatch, urlGetMovieByName(name))
    }
}

export function getPopMovies() {
    return dispatch => {
        getMovie(dispatch, urlGetPopMovies)
    }
}

export function sortMovies(typeOfSort) {
    return {
        type: SORT_MOVIES,
        payload: typeOfSort
    }
}

function getMovie(dispath, url) {
    fetch(url)
        .then(status)
        .then(json)
        .then(function(data) {
            dispath({
                type: GET_MOVIES_SUCCESS,
                payload: data.results
            });
        }).catch(function() {
        dispath({
            type: GET_MOVIES_ERR,
        });
    });
}

function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}

function json(response) {
    return response.json()
}






















