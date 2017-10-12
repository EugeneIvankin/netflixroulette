import React, { Component } from 'react'
import '../styles/moviesSearich.css'


export default class Main extends Component {

    movieDetail(movieName){
        this.props.history.push(`/film/${movieName}`);
    }
    

    render() {
        const {data} = this.props;

        var template = data.map(function (item) {
            return(
                <div className="foundMovies" key={item.movieId}>
                    <figure onClick={()=>{this.movieDetail(item.movieName)}}>
                        <img src={item.moviePoster}/>
                        <figcaption>
                            <h5 className="moviesName">{item.movieName}</h5>
                            <h5 className="moviesYear">{item.movieYear}</h5>
                            <h5 className="moviesGenre">{item.movieGenre}</h5>
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

            {template}


        </main>
    }
}

