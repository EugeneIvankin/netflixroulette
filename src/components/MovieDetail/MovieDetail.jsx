import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './movieDetail.css';

export default class MovieDetail extends Component {
  backToSearch = () => {
    this.props.history.push('/');
  };

  render() {
    const { movie } = this.props;

    if (!movie) {
      return null;
    }

    return (
      <main className="movie-detail">
        <header className="header-movie-detail">
          <p className="logo">netflixroulette</p>
          <button className="backward-batton" onClick={this.backToSearch}>SEARCH</button>
        </header>
        <div className="foundMovie">
          <figure className="movie-figure">
            <img src={`https://image.tmdb.org/t/p/w640${movie.moviePoster}`} alt="Poster" />
          </figure>
          <div className="movie-info">
            <h1 className="movie-name">{movie.movieName}</h1>
            <h2 className="movie-mark">{movie.movieLevel}</h2>
            <h2 className="movie-year">{movie.movieYear}</h2>
            <h2 className="movie-durability">{movie.movieDurability} min.</h2>
            <h2 className="movie-story">{movie.movieStory}</h2>
          </div>
        </div>
      </main>
    );
  }
}

MovieDetail.propTypes = {
  movie: PropTypes.shape({
    moviePoster: PropTypes.string,
    movieName: PropTypes.string,
    movieLevel: PropTypes.number,
    movieYear: PropTypes.string,
    movieDurability: PropTypes.number,
    movieStory: PropTypes.string,
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

MovieDetail.defaultProps = {
  movie: {
    moviePoster: '',
    movieName: '',
    movieLevel: 0,
    movieYear: '',
    movieDurability: 0,
    movieStory: '',
  },
};
