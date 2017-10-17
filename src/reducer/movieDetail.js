import {GET_MOVIE_SUCCESS, GET_MOVIE_ERR} from '../constants/MovieDetail'

const initialState = {
    movieName: '',
    movieLevel: '',
    movieYear: '',
    movieDurability: '',
    movieStory: '',
};

function newJson(movie) {
    return {
        movieName:movie.title,
        movieLevel:movie.vote_average,
        movieYear:movie.release_date,
        movieDurability:movie.runtime,
        movieStory:movie.overview
    }
}

export default function MovieDetail(state = initialState, action) {

    switch (action.type) {
        case GET_MOVIE_SUCCESS:
            console.log('aaaaa '+action.payload.title,+" "+action.payload.vote_average+" "+action.payload.release_date+" "+action.payload.runtime+" "+action.payload.overview);
            return {...state};

        case GET_MOVIE_ERR:
            /*return {...state, foundedMovies:newJson(action.payload)};*/

        default:
            return state;
    }

}