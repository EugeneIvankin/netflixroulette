import React, { Component, PropTypes } from 'react'
import '../styles/movieDetail.css'
import { withRouter } from 'react-router-dom'

export default class MovieDetail extends Component {
    render() {

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
                    <h1 className="movieName">Pulp Fiction</h1>
                    <h2 className="movieMark">4.1</h2>
                    <h2 className="movieGenre">Oscar-winning Movies</h2>
                    <h2 className="movieYear">1994</h2>
                    <h2 className="movieDurability">154 min</h2>
                    <h2 className="movieStory">Weaving together three stories featuring a burger-loving hit man, his philosophical partner and a washed-up boxer, Quentin Tarantino influenced a generation of filmmakers with this crime caper`s stylized, over-the-top violence and dark comic spirit.</h2>
                    <h4 className="movieDirector">Director: Quentin Tarantino</h4>
                    <h4 className="movieCast">Cast: John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis, Harvey Keitel, Tim Roth, Amanda Plummer, Ving Rhames, Eric Stoltz, Maria de Medeiros</h4>
                </div>
            </div>
        </main>
    }
}

