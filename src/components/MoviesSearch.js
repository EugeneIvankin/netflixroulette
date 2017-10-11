import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../styles/moviesSearich.css'
import { withRouter } from 'react-router-dom'

export default class Main extends Component {

// вынести withRouter
// клики вынести
// проверить наличие history через рендер
// проверить именование



    render() {

        const { store } = this.context;
        const state = store.getState();
        const {movieName, movieYear, movieGenre} = state.searchMovies;

        const Figure = withRouter(({ history}) => (
            <figure
                onClick={() => { history.push('/film') }}
            >
                <img/>
                <figcaption>
                    <h5 className="moviesName">{movieName}</h5>
                    <h5 className="moviesYear">{movieYear}</h5>
                    <h5 className="moviesGenre">{movieGenre}</h5>
                </figcaption>
            </figure>
        ));



        return <main>
            <nav>
                <h5 className="moviesFoundText"> 7 movies found </h5>
                <h5 className="sortText"> Sort by </h5>
                <h5 className="sortText"> realease date</h5>
                <h5 className="sortText"> rating </h5>
            </nav>

            <div className="foundMovies">
                <Figure/>
            </div>

        </main>
    }
}

Main.contextTypes = {
    store: PropTypes.object
};