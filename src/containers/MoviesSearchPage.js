import React, { Component } from 'react'
import Header from "../components/Header";
import MoviesSearch from "../components/MoviesSearch"
import { connect } from 'react-redux'
import * as searchActions from '../actions/SearchActions'
import { bindActionCreators } from 'redux'
import * as movieDetail from "../actions/MovieDetailActions";


class MoviesSearchPage extends Component {

    componentDidMount(){
        this.props.searchAction.getMoviesByName(this.props.match.params.string);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.match.params.string!==nextProps.match.params.string){
            this.props.searchAction.getMoviesByName(nextProps.match.params.string);
        }
    }

    render() {
        const {getMovieInfo} = this.props.movieDetail;
        const { history} = this.props;
        const { foundedMovies } = this.props.movies;

        return <div>
            <Header history={history}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(MoviesSearchPage)
