import { GET_MOVIE_INFO } from '../constants/MovieDetail'

const initialState = {
    movieName: 'Pulp Fiction',
    movieMarc: 4.1,
    movieGenre: 'Oscar-winning Movies',
    movieYear: 1994,
    movieDurability: '154 min',
    movieStory: 'Weaving together three stories featuring a burger-loving hit man, ' +
    'his philosophical partner and a washed-up boxer, Quentin Tarantino influenced a generation ' +
    'of filmmakers with this crime caper`s stylized, over-the-top violence and dark comic spirit.',
    movieDirector: 'Quentin Tarantino',
    movieCast: 'John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis, Harvey Keitel, Tim Roth, ' +
    'Amanda Plummer, Ving Rhames, Eric Stoltz, Maria de Medeiros'
};

export default function MovieDetail(state = initialState, action) {

    switch (action.type) {
        case GET_MOVIE_INFO:
            return {...state};

        default:
            return state;
    }

}