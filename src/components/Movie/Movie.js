import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


const ulrForPoster = 'https://image.tmdb.org/t/p/w640';

const Movie = ({item, getMovie}) => {

    /// как убрать стрелочную функцию в клике?
    // если вынести в отдельную функцию, то она так же будет пересоздаваться каждый раз
    // возможно использовать линк

    return(
        <div className="movie" onClick={() => getMovie(item.movieId)} title={item.movieName}>
            <figure>
                <img src={`${ulrForPoster}${item.moviePoster}`} alt={item.movieName}/>
            </figure>
            <figcaption>
                <p className="movies-name">{item.movieName}</p>
                <p className="movies-year">{item.movieYear}</p>
                <p className="movies-level">{item.movieLevel}</p>
            </figcaption>
        </div>
    )
};

Movie.propTypes = {
    item: PropTypes.object.isRequired,
  /*  getMovie: PropTypes.func.isRequired*/
};

export default Movie;