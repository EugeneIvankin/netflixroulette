import { GET_MOVIES_SUCCESS, GET_MOVIES_ERR } from '../constants/SearchMovies'

const initialState = {
    foundedMovies: []
};

function newJson(movies) {
    return movies.map(movie =>({
        movieId:movie.show_id,
        movieName:movie.show_title,
        movieYear:movie.release_year,
        movieGenre:movie.category,
        moviePoster:movie.poster
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
