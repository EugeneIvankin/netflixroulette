import React from 'react'


const Movie = ({item, getMovie}) => {
    return(
        <div className="movie" onClick={() => {getMovie(item.movieId)}} title={item.movieName}>
            <figure>
                <img src={`https://image.tmdb.org/t/p/w640${item.moviePoster}`} alt={item.movieName}/>
            </figure>
            <figcaption>
                <h5 className="moviesName">{item.movieName}</h5>
                <h5 className="moviesYear">{item.movieYear}</h5>
                <h5 className="moviesLevel">{item.movieLevel}</h5>
            </figcaption>
        </div>
    )
};

export default Movie;