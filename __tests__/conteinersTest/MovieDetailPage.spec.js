import React from 'react';
import { shallow } from 'enzyme';
import MovieDetailPage from '../../src/containers/MovieDetail'
import configureStore from 'redux-mock-store';
import MovieDetail from '../../src/components/MovieDetail/MovieDetail'


describe('<MovieDateilPage/>', () => {

    const initialState = {

        searchMovies:{
        foundedMovies: [
            {movieId: '1', movieName: 'Taxi', moviePoster: 'url', movieYear: '2017', movieLevel: '5.5'}
        ],
    },

        movieDetail: {
            foundedMovie: {
                movieId: '1',
                movieName: 'Taxi',
                moviePoster: 'url',
                movieYear: '2017',
                movieLevel: '5.5'
            }
        }
    };

    const mockStore = configureStore();

    let store,renderedComponent;

    beforeEach(()=>{
        store = mockStore(initialState);
        renderedComponent = shallow (
            <MovieDetailPage store={store} />
        );
    });


    it ('should render MovieDetailPage', () => {
        expect(renderedComponent.prop('movie')).toEqual(initialState.movieDetail);
        expect(renderedComponent.prop('movies')).toEqual(initialState.searchMovies);
        /*expect(renderedComponent.contains(<MovieDetail movie={initialState.movieDetail} />)).toBe(true);*/
        expect(renderedComponent).toMatchSnapshot();
    });



});

