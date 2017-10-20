import React from 'react';
import { shallow } from 'enzyme';
import Movie from '../src/components/Movie'

describe('<Movie/>', () => {
    const movie = {
        movieId: '1',
        movieName: 'Taxi',
        moviePoster: 'url',
        movieYear: '2017',
        movieLevel: '5.5'
    };

    it ('should render Movie', () => {

        const renderComponent = shallow(
          <Movie item={movie} getMovie={jest.fn()}/>
        );
        expect(renderComponent).toMatchSnapshot();
    });

    it ('test onClick', () => {
        const onClick = jest.fn();
        const renderComponent = shallow(
            <Movie item={movie} getMovie={onClick}/>
        );
        renderComponent.find('div').simulate('click');
        expect(onClick).toBeCalledWith(movie.movieId)
    });

});