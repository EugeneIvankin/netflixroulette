import React, { Component } from 'react';
import './FildMovies.css';
import PropTypes from 'prop-types';
import Movie from '../Movie/Movie';
import NotFoundMovies from '../MovieNotFounded/NotFound';


export default class MoviesSearch extends Component {

  renderList() {
    const { foundedMovies, foundedMovie } = this.props;
    if (foundedMovies.length !== 0){
      return foundedMovies
        .filter(item => !foundedMovie || foundedMovie.movieId !== item.movieId)
        .map((item) => <Movie item={item} key={item.movieId} />);
    }
    return <NotFoundMovies />;
  }

  render() {
    return <main>
      <div className="fild-movies">
        {this.renderList()}
      </div>
    </main>;
  }

}

MoviesSearch.propTypes = {
  foundedMovies: PropTypes.array.isRequired,
  foundedMovie: PropTypes.object.isRequired
};


