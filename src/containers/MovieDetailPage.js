import React, { Component, PropTypes } from 'react'
import MovieDetail from "../components/MovieDetail";
import { connect } from 'react-redux'
import * as searchActions from '../actions/SearchActions'
import { bindActionCreators } from 'redux'
import * as movieDetailAction from "../actions/MovieDetailActions";
import MoviesSearch from "../components/MoviesSearch"


class MovieDetailPage extends Component {

    componentDidMount(){
        this.props.movieDetailAction.getMovieInfo(this.props.match.params.string);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.match.params.string!==nextProps.match.params.string){
            this.props.movieDetailAction.getMovieInfo(nextProps.match.params.string);
        }
    }

    render() {
        const { foundedMovies } = this.props.movies;
        const { foundedMovie } = this.props.movie;
        const { history} = this.props;

        return <div>
            <MovieDetail movie={foundedMovie}/>
            <MoviesSearch foundedMovies={ foundedMovies } foundedMovie={foundedMovie}  history={history}/>
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
        searchAction: bindActionCreators(searchActions, dispatch),
        movieDetailAction: bindActionCreators(movieDetailAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage)