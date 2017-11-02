import React from 'react';
import { shallow } from 'enzyme';
import MovieDetailPage from '../../src/components/MoviePages/MovieDetailPage';


let props;

describe('<MovieDetailPage/>', () => {
  beforeEach(() => {
    props = {
      getMovieInfo: jest.fn(),
      match: {
        params: {
          string: '',
        },
      },
      movies: {
        foundedMovies: [
            {},
        ],
      },
      movie: {
        foundedMovie: {},
      },
      sortMovies: jest.fn(),
      history: {},
    }
  });

  it('should render MovieDetailPage', () => {
    const component = shallow(<MovieDetailPage {...props} />);
    expect(component).toMatchSnapshot();
  });
});
