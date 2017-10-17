import React, { Component, PropTypes } from 'react'
import MovieDetail from "../components/MovieDetail";
import { connect } from 'react-redux'
import * as searchActions from '../actions/SearchActions'
import { bindActionCreators } from 'redux'
import * as movieDetail from "../actions/MovieDetailActions";
import MoviesSearch from "../components/MoviesSearch"


class MovieDetailPage extends Component {

    componentDidMount(){
        this.props.movieDetail.getMovieInfo(this.props.match.params.string);
        this.props.searchAction.getMoviesByName("IT");
    }


    render() {
        const {getMovieInfo} = this.props.movieDetail;
        const { history} = this.props;
        const { foundedMovies } = this.props.movies;

        return <div>
            <MovieDetail/>
            <MoviesSearch getMovieInfo={getMovieInfo} data={ foundedMovies } history={history}/>
        </div>
    }
}

function mapStateToProps (state) {
    return {
        movies: state.searchMovies,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        searchAction: bindActionCreators(searchActions, dispatch),
        movieDetail: bindActionCreators(movieDetail, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage)