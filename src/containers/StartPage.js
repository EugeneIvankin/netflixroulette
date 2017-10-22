import React, { Component } from 'react'
import Header from "../components/Header";
import { connect } from 'react-redux'
import * as searchActions from '../actions/SearchActions'
import { bindActionCreators } from 'redux'
import Main from "../components/Main";


class MoviesSearchPage extends Component {

    componentWillMount(){
        this.props.searchAction.getPopMovies();
    }
    render() {
        const { history } = this.props;
        const { foundedMovies } = this.props.movies;

        return <div>
            <Header history={history}/>
            <MoviesSearch foundedMovies={ foundedMovies } foundedMovie={foundedMovie} sortMovies={sortMovies} history={history}/>
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
