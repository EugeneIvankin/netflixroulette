import { GET_MOVIES_BY_NAME, GET_MOVIES_BY_DIRECTOR } from '../constants/SearchMovies'

const initialState = {
    movieName: 'Kill Bill vol.2',
    movieYear: 2004,
    movieGenre: 'Action & Adventure'
};

export default function searchMovies(state = initialState, action) {

    switch (action.type) {
        case GET_MOVIES_BY_NAME:
            return {...state};

        case GET_MOVIES_BY_DIRECTOR:
            return {...state};

        default:
            return state;
    }

}
