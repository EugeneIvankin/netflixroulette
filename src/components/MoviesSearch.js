import React, { Component, PropTypes } from 'react'
import '../styles/moviesSearich.css'
import { withRouter } from 'react-router-dom'

export default class Main extends Component {
    render() {

        const Figure = withRouter(({ history}) => (
            <figure
                onClick={() => { history.push('/film') }}
            >
                <img/>
                <figcaption>
                    <h5 className="moviesName">KILL BILL: VOL. 2</h5>
                    <h5 className="moviesYear">2004</h5>
                    <h5 className="moviesGenre">Action & Adventure</h5>
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

