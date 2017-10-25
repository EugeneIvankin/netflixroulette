import reducer from '../../src/reducer/searchMovies'
import {GET_MOVIES_SUCCESS} from '../../src/constants/SearchMovies'
import {SORT_MOVIES} from '../../src/constants/SearchMovies'


describe('GET_MOVIES_SUCCESS reducer', () => {

    const foundedMoviesJson = [{
        id: '1',
        title: 'Taxi',
        poster_path: 'url',
        release_date: '2017',
        vote_average: '5.5',
    }];

    const foundedMovies = [{
        movieId: '1',
        movieName: 'Taxi',
        moviePoster: 'url',
        movieYear: '2017',
        movieLevel: '5.5',
    }];

    it ('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            foundedMovies: []
        })
    })

    it ('should handle GET_MOVIES_SUCCESS', () => {
        expect(
            reducer(undefined, {
                type: GET_MOVIES_SUCCESS,
                payload: foundedMoviesJson
            })
        ).toEqual({
            foundedMovies: foundedMovies
        })
    })

    it ('should handle SORT_MOVIES', () => {
        expect (
            reducer(
                {
                    foundedMovies:[
                    {
                        movieId: '2',
                        movieName: 'It',
                        moviePoster: 'url',
                        movieYear: '2016',
                        movieLevel: '5',
                    },
                    {
                        movieId: '1',
                        movieName: 'Taxi',
                        moviePoster: 'url',
                        movieYear: '2017',
                        movieLevel: '5.5',
                    }
                ]
        },
                {
                    type: SORT_MOVIES,
                    payload: 'date'
                }
            )
        ).toEqual(
            {
            foundedMovies: [
                {
                    movieId: '1',
                    movieName: 'Taxi',
                    moviePoster: 'url',
                    movieYear: '2017',
                    movieLevel: '5.5'
                },
                {
                    movieId: '2',
                    movieName: 'It',
                    moviePoster: 'url',
                    movieYear: '2016',
                    movieLevel: '5',
                }
            ]

        })
    })
})
