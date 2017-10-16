import React, { Component } from 'react'
import Header from "../components/Header";
import { connect } from 'react-redux'
import * as searchActions from '../actions/SearchActions'
import { bindActionCreators } from 'redux'
import Main from "../components/Main";


class MoviesSearchPage extends Component {
    render() {
        const {getMoviesByName} = this.props.searchAction;
        const {getPopMovies} = this.props.searchAction;
        const { history } = this.props;
        const { foundedMovies } = this.props.movies;

        return <div>
            <Header getMoviesByName={getMoviesByName} history={history}/>
            <Main getPopMovies={getPopMovies} data={ foundedMovies }/>
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
        searchAction: bindActionCreators(searchActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesSearchPage)
