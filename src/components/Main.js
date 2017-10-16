import React, { Component, PropTypes } from 'react'


export default class Main extends Component {

    componentWillMount(){
        this.props.getPopMovies();
    }

    render() {
        const {data} = this.props;
        var moviesFild = data.map(function (item) {
            return(
                <div className="foundMovies" key={item.movieId}>
                    <figure>
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

            </nav>
            {moviesFild}
        </main>
    }
}

