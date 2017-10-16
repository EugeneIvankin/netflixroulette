import React, { Component } from 'react'
import '../styles/moviesSearich.css'


export default class Main extends Component {

    getMovie(movieName){
        this.props.history.push(`/film/${movieName}`);
        this.props.getMovieInfo(movieName);
    }

    componentWillMount(){
        this.props.getMoviesByName(this.props.match.params.string);
    }

    render() {


        const {data} = this.props;
        var moviesFild = data.map((item) => {
            return(
                <div className="foundMovies" key={item.movieId}>
                    <figure onClick={()=>{this.getMovie(item.movieName)}}>
                        <img src={`https://image.tmdb.org/t/p/w640${item.moviePoster}`}/>
                        <figcaption>
                            <h5 className="moviesName">{item.movieName}</h5>
                            <h5 className="moviesYear">{item.movieYear}</h5>
                            <h5 className="moviesGenre">{item.movieLevel}</h5>
                        </figcaption>
                    </figure>
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
            {moviesFild}
        </main>
    }
}

