import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './movieDetail.css';

export default class MovieDetail extends Component {

    backToSearch = () => {
        this.props.history.push(`/`);
    }

    render() {
        const {movie} = this.props;

        if(!movie){
            return null;
        }

        return <main className="movie-detail">
            <header className="header-movie-detail">
                <p className="logo">netflixroulette</p>
                <button className="backward-batton" onClick={this.backToSearch}>SEARCH</button>
            </header>
            <div className="foundMovie">
                <figure className="movie-figure">
                    <img src={`https://image.tmdb.org/t/p/w640${movie.moviePoster}`}/>
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
    }
}

MovieDetail.propTypes = {
    movie: PropTypes.object
};