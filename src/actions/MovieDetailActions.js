import { GET_MOVIE_INFO } from '../constants/MovieDetail'


export function getMovieInfo(name) {
    return {
        type: GET_MOVIE_INFO,
        payload: name
    }
}

