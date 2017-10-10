import { GET_MOVIES_BY_NAME, GET_MOVIES_BY_DIRECTOR } from '../constants/SearchMovies'


export function getMoviesByName(name) {
    return {
        type: GET_MOVIES_BY_NAME,
        payload: name
    }
}

export function getMoviesByDirector(director) {
    return {
        type: GET_MOVIES_BY_DIRECTOR,
        payload: director
    }
}