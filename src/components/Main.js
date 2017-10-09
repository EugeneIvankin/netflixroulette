import React, { Component, PropTypes } from 'react'
import '../styles/main.css'

export default class Main extends Component {
    render() {
        return <main>
            <nav>
                <h5 className="moviesFoundText"> 7 movies found </h5>
                <h5 className="sortText"> Sort by </h5>
                <h5 className="sortText"> realease date</h5>
                <h5 className="sortText"> rating </h5>
            </nav>

            <div className="foundMovies">
                <figure>
                    <img/>
                    <figcaption>
                        <h5 className="moviesName">KILL BILL: VOL. 2</h5>
                        <h5 className="moviesYear">2004</h5>
                        <h5 className="moviesGenre">Action & Adventure</h5>
                    </figcaption>
                </figure>
            </div>

        </main>
    }
}

