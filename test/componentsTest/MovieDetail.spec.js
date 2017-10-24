import React from 'react';
import { shallow } from 'enzyme';
import MovieDetail from '../../src/components/MovieDetail/MovieDetail'

describe('<MovieDetail/>', () => {

    const foundedMovie = {
        movieId: '1',
        movieName: 'Taxi',
        moviePoster: 'url',
        movieYear: '2017',
        movieLevel: '5.5'
    };

    it ('should render MovieDetail', () => {
        const renderedComponent = shallow(
          <MovieDetail movie={foundedMovie}/>
        );
        expect(renderedComponent).toMatchSnapshot();
    });

    it ('should call backToSearch', () => {
        const history = {
            push: jest.fn()
        };

        const renderedComponent = shallow(
          <MovieDetail history={history}/>
        );
        renderedComponent.instance().backToSearch();
        expect(history.push).toBeCalledWith('/');
    });

});