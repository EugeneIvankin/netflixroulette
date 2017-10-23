import React from 'react';
import { shallow } from 'enzyme';
import FildMovies from '../src/components/FildMovies/FildMovies'

describe('<FildMovies/>', () => {

    const foundedMovies = [];
    const foundedMovie = {
        movieId: '1',
        movieName: 'Taxi',
        moviePoster: 'url',
        movieYear: '2017',
        movieLevel: '5.5'
    };

    it ('should render FindMovies', () => {
        const renderedComponent = shallow(
          <FildMovies foundedMovies={foundedMovies}
                      foundedMovie={foundedMovie}
                      sortMovies={jest.fn()}/>
        );
        expect(renderedComponent).toMatchSnapshot();
    });

    /*it ('should call getMovie', () => {
        const history = {
            push: jest.fn()
        };

        const renderedComponent = shallow(
            <FildMovies history={history}/>
        );

        renderedComponent.find('Movie').simulate('click', 'Test');
        expect(history.push).toBeCalledWith('/film/Test');
    })
*/
});