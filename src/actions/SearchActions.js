import {GET_MOVIES_SUCCESS, GET_MOVIES_ERR} from '../constants/SearchMovies'

export function getMoviesByName(name) {
    return dispatch => {
        get(name,dispatch)
    }
}

export function getPopMovies() {
    return dispatch => {
        getMovies(dispatch)
    }
}

function get(name, dispath) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=32222e52f3ed54debf15b9c2ece6c852&language=en-US&query=${name}&page=1&include_adult=false`)
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

function getMovies(dispath) {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=32222e52f3ed54debf15b9c2ece6c852&language=en-US&page=1`)
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






















