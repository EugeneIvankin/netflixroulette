import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


const Movie = ({item, getMovie}) => {
    return(
        <div className="movie" onClick={() => {getMovie(item.movieId)}} title={item.movieName}>
            <figure>
                <img src={`https://image.tmdb.org/t/p/w640${item.moviePoster}`} alt={item.movieName}/>
            </figure>
            <figcaption>
                <p className="moviesName">{item.movieName}</p>
                <p className="moviesYear">{item.movieYear}</p>
                <p className="moviesLevel">{item.movieLevel}</p>
            </figcaption>
        </div>
    )
};

Movie.propTypes = {
    item: PropTypes.object.isRequired,
    getMovie: PropTypes.func.isRequired
};

export default Movie;