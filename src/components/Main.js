import React, { Component, PropTypes } from 'react'
import '../styles/moviesSearich.css'

export default class Main extends Component {

    render() {

        const {data} = this.props;

        var moviesFild = data.map(function (item) {
            return(
                <div className="movie" title={item.movieName} key={item.movieId}>
                    <figure>
                        <img src={`https://image.tmdb.org/t/p/w640${item.moviePoster}`}/>
                    </figure>
                    <figcaption>
                        <h5 className="moviesName">{item.movieName}</h5>
                        <h5 className="moviesYear">{item.movieYear}</h5>
                        <h5 className="moviesLevel">{item.movieLevel}</h5>
                    </figcaption>
                </div>
            )
        });

        return <main>
            <nav></nav>
            <div className="main">
                {moviesFild}
            </div>
        </main>
    }
}

