import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/movieDetail.css';

export default class MovieDetail extends Component {

    constructor(props){
        super(props);
        this.backToSearch = this.backToSearch.bind(this);
    }

    backToSearch() {
        this.props.history.push(`/`);
    }

    render() {
        const {movie} = this.props;

        if(!movie){
            return null;
        }

        return <main className="movieDetail">

            <header className="headerMovieDetail">
                <p className="logo">netflixroulette</p>
                <button className="backwardBatton" onClick={() => {this.backToSearch(movie.movieName)}}><h2 className="backwardText">SEARCH</h2></button>
            </header>

            <div className="foundMovie">
                <figure className="movieFigure">
                    <img src={`https://image.tmdb.org/t/p/w640${movie.moviePoster}`} className="movieImage"/>
                </figure>

                <div className="movieInfo">
                    <h1 className="movieName">{movie.movieName}</h1>
                    <h2 className="movieMark">{movie.movieLevel}</h2>
                    <h2 className="movieYear">{movie.movieYear}</h2>
                    <h2 className="movieDurability">{movie.movieDurability} min.</h2>
                    <h2 className="movieStory">{movie.movieStory}</h2>
                </div>
            </div>
        </main>
    }
}

MovieDetail.propTypes = {
    movie: PropTypes.object
};