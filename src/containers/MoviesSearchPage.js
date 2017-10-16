import React, { Component } from 'react'
import Header from "../components/Header";
import MoviesSearch from "../components/MoviesSearch"
import { connect } from 'react-redux'
import * as searchActions from '../actions/SearchActions'
import { bindActionCreators } from 'redux'
import * as movieDetail from "../actions/MovieDetailActions";


class MoviesSearchPage extends Component {
    render() {
        const {getMoviesByName} = this.props.searchAction;
        const {getMovieInfo} = this.props.movieDetail;
        const { history,match} = this.props;
        const { foundedMovies } = this.props.movies;

        return <div>
            <Header getMoviesByName={getMoviesByName} history={history}/>
            <MoviesSearch getMovieInfo={getMovieInfo} getMoviesByName={getMoviesByName} data={ foundedMovies } history={history} match={match}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(MoviesSearchPage)
