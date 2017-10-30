import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import {Link} from 'react-router-dom';


const ulrForPoster = 'https://image.tmdb.org/t/p/w640';

const Movie = ({item}) => {
    return(
        <Link to={`/film/${item.movieId}`}>
            <div className="movie" title={item.movieName}>
                <figure>
                    <img src={`${ulrForPoster}${item.moviePoster}`} alt={item.movieName}/>
                </figure>
                <figcaption>
                    <p className="movies-name">{item.movieName}</p>
                    <p className="movies-year">{item.movieYear}</p>
                    <p className="movies-level">{item.movieLevel}</p>
                </figcaption>
            </div>
        </Link>
    )
};

Movie.propTypes = {
    item: PropTypes.object.isRequired,
};

export default Movie;