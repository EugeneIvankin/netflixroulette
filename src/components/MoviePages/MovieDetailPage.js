import React, { Component } from 'react'
import PropTypes from 'prop-types';
import MovieDetail from "../MovieDetail/MovieDetail";
import FildMovies from "../FildMovies/FildMovies"


export default class MovieDetailPage extends Component {

    componentDidMount(){
        this.props.getMovieInfo(this.props.match.params.string);
        window.scrollTo(0,0);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.match.params.string!==nextProps.match.params.string){
            this.props.getMovieInfo(nextProps.match.params.string);
            window.scrollTo(0,0);
        }
    }

    render() {
        const { foundedMovies } = this.props.movies;
        const { foundedMovie } = this.props.movie;
        const { history} = this.props;
        const {sortMovies} = this.props.sortMovies;

        return <div>
            <MovieDetail movie={foundedMovie} history={history}/>
            <FildMovies foundedMovies={ foundedMovies }
                        foundedMovie={foundedMovie}
                        sortMovies={sortMovies}
                        history={history}/>
        </div>
    }
}

MovieDetailPage.propTypes = {
    foudedMovies: PropTypes.array, foundedMovie: PropTypes.object, sortMovies: PropTypes.func
};