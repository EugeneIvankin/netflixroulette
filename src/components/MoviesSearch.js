import React, { Component } from 'react'
import '../styles/moviesSearich.css'
import PropTypes from 'prop-types';
import Movie from './Movie'

export default class MoviesSearch extends Component {

    constructor(props){
        super(props);
        this.state = {value:''};
        this.getMovie = this.getMovie.bind(this);
    }

    getMovie(movieId) {
        this.props.history.push(`/film/${movieId}`);
    }

    renderList(){
        const {foundedMovies, foundedMovie} = this.props;
        return foundedMovies
            .filter(item=>!foundedMovie||foundedMovie.movieId!==item.movieId)
            .map((item) =>
                <Movie item={item} getMovie={this.getMovie} key={item.movieId}/>
            );
    }

    render() {
        const {foundedMovies} = this.props;
        return <main>
            <nav>
                <h5 className="moviesFoundText"> {foundedMovies.length} movies found </h5>
                <h5 className="sortText"> Sort by </h5>
                <h5 className="sortText"> realease date</h5>
                <h5 className="sortText"> rating </h5>
            </nav>
            <div className="main">
                {this.renderList()}
            </div>
        </main>
    }
}

MoviesSearch.propTypes = {
  foudedMovies: PropTypes.array
};

