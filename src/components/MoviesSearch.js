import React, { Component } from 'react'
import '../styles/moviesSearich.css'
import PropTypes from 'prop-types'
import Movie from './Movie'
import NotFoundMovies from './NotFound'

export default class MoviesSearch extends Component {

    constructor(props){
        super(props);
        this.state = {value:''};
        this.getMovie = this.getMovie.bind(this);
    }

    getMovie(movieId) {
        this.props.history.push(`/film/${movieId}`);
        window.scrollTo(0,0);
    }

    renderList(){
        const {foundedMovies, foundedMovie} = this.props;
        if (foundedMovies.length !==0){
            return foundedMovies
                .filter(item=>!foundedMovie||foundedMovie.movieId!==item.movieId)
                .map((item) =>
                    <Movie item={item} getMovie={this.getMovie} key={item.movieId}/>
                );
        }
        return <NotFoundMovies/>
    }

    render() {
        const {foundedMovies} = this.props;
        const {sortMovies} = this.props;
        return <main>
            <nav>
                {/*поменять на другие теги*/}
                <h5 className="moviesFoundText"> {foundedMovies.length} movies found </h5>
                <h5 className="sortText"> Sort by </h5>
                <h5 className="sortText" onClick={()=>{sortMovies('date')}}> realease date</h5>
                <h5 className="sortText" onClick={()=>{sortMovies('rating')}}> rating </h5>
            </nav>
            <div className="main">
                {this.renderList()}
            </div>
        </main>
    }
}


MoviesSearch.propTypes = {
  foudedMovies: PropTypes.array, foundedMovie: PropTypes.object
};


