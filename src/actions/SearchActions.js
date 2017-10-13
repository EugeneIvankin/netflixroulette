import { GET_MOVIES_BY_DIRECTOR_REQUEST, GET_MOVIES_BY_NAME_REQUEST, GET_MOVIES_SUCCESS, GET_MOVIES_ERR } from '../constants/SearchMovies'


export function getMoviesByDirector(name) {
    return function (dispatch) {
        dispatch({
            type: GET_MOVIES_BY_DIRECTOR_REQUEST,
            payload: name
        });
        getMovies(name,dispatch)
    }
}

export function getMoviesByName(name) {
    return function (dispatch) {
        dispatch({
            type: GET_MOVIES_BY_NAME_REQUEST,
            payload: name
        });
        getMovies(name,dispatch)
    }
}

function getMovies(name, dispath) {
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
    fetch(`https://netflixroulette.net/api/api.php?director=${name}`)
        .then(status)
        .then(json)
        .then(function(data) {
            dispath({
                type: GET_MOVIES_SUCCESS,
                payload: data
            });
        }).catch(function() {
            dispath({
                type: GET_MOVIES_ERR,
            });
    });
}



