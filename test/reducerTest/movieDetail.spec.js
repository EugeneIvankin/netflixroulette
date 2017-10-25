import reducer from '../../src/reducer/movieDetail'
import {GET_MOVIE_SUCCESS} from '../../src/constants/MovieDetail'


describe('GET_MOVIE_SUCCESS reducer', () => {

    const foundedMovieJson = {
        id: '1',
        title: 'Taxi',
        poster_path: 'url',
        release_date: '2017',
        vote_average: '5.5',
        runtime: '130',
        overview: 'overview'
    };

    const foundedMovie = {
        movieId: '1',
        movieName: 'Taxi',
        moviePoster: 'url',
        movieYear: '2017',
        movieLevel: '5.5',
        movieDurability: '130',
        movieStory: 'overview'
    };

    it ('should return the initial state', () => {
        expect(
            reducer(undefined, {})).toEqual({
            foundedMovie:null
        })
    })

    it ('should handle GET_MOVIE_SUCCESS', () => {
        expect(
            reducer(undefined, {
                type: GET_MOVIE_SUCCESS,
                payload: foundedMovieJson
            })
        ).toEqual({
            foundedMovie: foundedMovie
        })
    })
})
