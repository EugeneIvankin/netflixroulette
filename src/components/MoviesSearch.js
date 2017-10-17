import React, { Component } from 'react'
import '../styles/moviesSearich.css'



export default class Main extends Component {

    constructor(props){
        super(props);
        this.state = {value:''};
        this.getMovie = this.getMovie.bind(this);
    }

    getMovie(movieId) {
        this.props.history.push(`/film/${movieId}`);
    }

    render() {
        const {data} = this.props;

        var moviesFild = data.map( (item)=> {
            return(
                <div className="movie" onClick={() => {this.getMovie(item.movieId)}} title={item.movieName} key={item.movieId}>
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
            <nav>
                <h5 className="moviesFoundText"> {data.length} movies found </h5>
                <h5 className="sortText"> Sort by </h5>
                <h5 className="sortText"> realease date</h5>
                <h5 className="sortText"> rating </h5>
            </nav>
            <div className="main">
                {moviesFild}
            </div>
        </main>
    }
}

