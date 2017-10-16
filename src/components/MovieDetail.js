import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/movieDetail.css';
import { withRouter } from 'react-router-dom';

export default class MovieDetail extends Component {
    render() {

        const {movieName, movieMarc, movieGenre, movieYear, movieDurability,
                movieStory, movieDirector, movieCast} = state.movieDetail;
        const Button = withRouter(({ history}) => (
            <button
                className="backwardBatton"
                onClick={() => { window.history.back()}}
            >
                <h2 className="backwardText">SEARCH</h2>
            </button>
        ));



        return <main className="movieDetail">

            <header className="headerMovieDetail">
                <p className="logo">netflixroulette</p>
                <Button/>
            </header>

            <div className="foundMovies">

                <figure className="movieFigure">
                    <img className="movieImage"/>
                </figure>

                <div className="movieInfo">
                    <h1 className="movieName">{movieName}</h1>
                    <h2 className="movieMark">{movieMarc}</h2>
                    <h2 className="movieGenre">{movieGenre}</h2>
                    <h2 className="movieYear">{movieYear}</h2>
                    <h2 className="movieDurability">{movieDurability}</h2>
                    <h2 className="movieStory">{movieStory}</h2>
                    <h4 className="movieDirector">Director: {movieDirector}</h4>
                    <h4 className="movieCast">Cast: {movieCast}</h4>
                </div>
            </div>
        </main>
    }
}

