import {GET_MOVIE_SUCCESS, GET_MOVIE_ERR} from '../constants/MovieDetail'


export function getMovieInfo(movieId) {
    return dispatch => {
        return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=32222e52f3ed54debf15b9c2ece6c852`)
            .then(status)
            .then(json)
            .then( json => dispatch(getMovieSuccess(json)))
            .catch(ex => dispatch(getMovieErr()))
    }
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

function getMovieSuccess(movie){
    return {
        type: GET_MOVIE_SUCCESS,
        payload: movie
    }
}

function getMovieErr() {
    return {
        type: GET_MOVIE_ERR
    }
}


