import React, { Component, PropTypes } from 'react'
import Header from "../components/Header";
import MoviesSearch from "../components/MoviesSearch"
import { connect } from 'react-redux'
import * as searchActions from '../actions/SearchActions'
import { bindActionCreators } from 'redux'
import Main from "../components/Main";


class MoviesSearchPage extends Component {
    render() {
        const {getMoviesByDirector, getMoviesByName} = this.props.searchAction;
        const { history} = this.props;
        const { foundedMovies } = this.props.movies;
        if (foundedMovies.length !== 0){
            return <div>
                <Header getMoviesByDirector={getMoviesByDirector} getMoviesByName={getMoviesByName} history={history}/>
                <MoviesSearch data={ foundedMovies } history={history}/>
            </div>
        }
        else {
            return <div>
                <Header getMoviesByDirector={getMoviesByDirector} getMoviesByName={getMoviesByName} history={history}/>
                <Main/>
            </div>
        }

    }
}

function mapStateToProps (state) {
    return {
        movies: state.searchMovies,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        searchAction: bindActionCreators(searchActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesSearchPage)
