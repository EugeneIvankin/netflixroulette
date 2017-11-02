import React from 'react';
import { shallow } from 'enzyme';
import MovieSearchPage from '../../src/components/MoviePages/MovieSearchPage';


let props;

describe('<MovieSearchPage/>', () => {
  beforeEach(() => {
    props = {
      getMovieInfo: jest.fn(),
      match: {
        params: {
          string: '',
        },
      },
       movies: {
         foundedMovies: [],
       },
       movie: {
         foundedMovie: {},
       },
       searchAction: {
         getPopMovies: jest.fn(),
         getMoviesByName: jest.fn(),
         sortMovies: jest.fn(),
       },
      history: {},
    }
  });

  it('should render MovieSearchPage', () => {
    const component = shallow(<MovieSearchPage {...props} />);
    expect(component).toMatchSnapshot();
  });
});
