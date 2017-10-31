import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.css';


const ulrForPoster = 'https://image.tmdb.org/t/p/w640';
const Movie = ({ item }) => (
  <Link to={`/film/${item.movieId}`}>
    <div className="movie" title={item.movieName}>
      <figure>
        <img src={`${ulrForPoster}${item.moviePoster}`} alt={item.movieName} />
      </figure>
      <figcaption>
        <p className="movies-name">{item.movieName}</p>
        <p className="movies-year">{item.movieYear}</p>
        <p className="movies-level">{item.movieLevel}</p>
      </figcaption>
    </div>
  </Link>
);

export default Movie;

Movie.propTypes = {
  item: PropTypes.shape({
    movieId: PropTypes.string,
    movieName: PropTypes.string,
    moviePoster: PropTypes.string,
    movieYear: PropTypes.string,
    movieLevel: PropTypes.string,
  }).isRequired,
};
