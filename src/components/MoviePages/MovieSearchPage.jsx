import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import SortBoard from '../SortBoard/SortBoard';
import FildMovies from '../FildMovies/FildMovies';


export default class MoviesSearchPage extends Component {
  componentDidMount() {
    this.getMoviesByUrl(this.props.match.params.string);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.string !== nextProps.match.params.string) {
      this.getMoviesByUrl(nextProps.match.params.string);
    }
  }

  getMoviesByUrl(url) {
    if (url === undefined) {
      this.props.searchAction.getPopMovies();
    }
    this.props.searchAction.getMoviesByName(url);
  }

  render() {
    const { history } = this.props;
    const { foundedMovies } = this.props.movies;
    const { foundedMovie } = this.props.movie;
    const { sortMovies } = this.props.searchAction;

    return (
      <div>
        <Header history={history} />
        <SortBoard
          numberOfMovies={foundedMovies.length}
          sortMovies={sortMovies}
        />
        <FildMovies
          foundedMovies={foundedMovie}
          foundedMovie={foundedMovie}
        />
      </div>
    );
  }
}

MoviesSearchPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      string: PropTypes.string,
    }).isRequired,
  }).isRequired,
  movies: PropTypes.shape({
    foundedMovies: PropTypes.array,
  }).isRequired,
  movie: PropTypes.shape({
    foundedMovie: PropTypes.object,
  }).isRequired,
  searchAction: PropTypes.shape({
    getPopMovies: PropTypes.func,
    getMoviesByName: PropTypes.func,
    sortMovies: PropTypes.func,
  }).isRequired,
  history: PropTypes.shape({
    history: PropTypes.object,
  }).isRequired,
};
