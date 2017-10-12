import { GET_MOVIES_BY_NAME_REQUEST, GET_MOVIES_BY_DIRECTOR_REQUEST, GET_MOVIES_SUCCESS, GET_MOVIES_ERR } from '../constants/SearchMovies'

const initialState = {
    arr: []
    /*movieName: null,
    movieYear: null,
    movieGenre: null*/
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
            return {...state, /*movieName:action.payload.show_title, movieYear:action.payload.release_year, movieGenre:action.payload.category*/ arr:newJson(action.payload)};

        case GET_MOVIES_ERR:
            return state; /////// отображать главную странуцу

        case GET_MOVIES_BY_DIRECTOR_REQUEST:
            return {...state};

        default:
            return state;
    }

}
