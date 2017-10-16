import { GET_MOVIES_SUCCESS, GET_MOVIES_ERR } from '../constants/SearchMovies'

const initialState = {
    foundedMovies: []
};

function newJson(movies) {
    return movies.map(movie =>({
        movieId:movie.id,
        movieName:movie.title,
        movieYear:movie.release_date,
        movieLevel:movie.vote_average,
        moviePoster:movie.poster_path
    }))
}

export default function searchMovies(state = initialState, action) {

    switch (action.type) {
        case GET_MOVIES_SUCCESS:
            return {...state, foundedMovies:newJson(action.payload)};

        case GET_MOVIES_ERR:
            return {...state, foundedMovies:newJson(action.payload)};

        default:
            return state;
    }
}
