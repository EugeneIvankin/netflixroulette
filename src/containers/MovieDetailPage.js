import React, { Component, PropTypes } from 'react'
import MovieDetail from "../components/MovieDetail/MovieDetail";
import { connect } from 'react-redux'
import * as searchActions from '../actions/SearchActions'
import { bindActionCreators } from 'redux'
import * as movieDetailAction from "../actions/MovieDetailActions";
import MoviesSearch from "../components/FildMovies/FildMovies"


class MovieDetailPage extends Component {

    componentDidMount(){
        this.props.getMovieInfo(this.props.match.params.string);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.match.params.string!==nextProps.match.params.string){
            this.props.getMovieInfo(nextProps.match.params.string);
        }
    }

    render() {
        const { foundedMovies } = this.props.movies;
        const { foundedMovie } = this.props.movie;
        const { history} = this.props;
        const {sortMovies} = this.props.sortMovies;

        return <div>
            <MovieDetail movie={foundedMovie} history={history}/>
            <MoviesSearch foundedMovies={ foundedMovies }
                          foundedMovie={foundedMovie}
                          sortMovies={sortMovies}
                          history={history}/>
        </div>
    }
}

function mapStateToProps (state) {
    return {
        movies: state.searchMovies,
        movie: state.movieDetail
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sortMovies: bindActionCreators(searchActions.sortMovies, dispatch),
        getMovieInfo: bindActionCreators(movieDetailAction.getMovieInfo, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage)