import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from '../Movie/Movie';
import NotFoundMovies from '../MovieNotFounded/NotFound';
import style from './FildMovies.css';


export default class MoviesSearch extends Component {
  renderList() {
    const { foundedMovies, foundedMovie } = this.props;
    if (foundedMovies && foundedMovies.length !== 0) {
      return foundedMovies
        .filter(item => !foundedMovie || foundedMovie.movieId !== item.movieId)
        .map(item => <Movie item={item} key={item.movieId} />);
    }
    return <NotFoundMovies />;
  }

  render() {
    return (
      <main>
        <div className={style.fildMovies}>
          {this.renderList()}
        </div>
      </main>
    );
  }
}

MoviesSearch.propTypes = {
  foundedMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
  foundedMovie: PropTypes.shape({
    movieId: PropTypes.number,
  }),
};

MoviesSearch.defaultProps = {
  foundedMovie: {
    movieId: '',
  },
};
