import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Header from "../components/Header/Header";
import FildMovies from "../components/FildMovies/FildMovies"
import { connect } from 'react-redux'
import * as searchActions from '../actions/SearchActions'
import { bindActionCreators } from 'redux'


class MoviesSearchPage extends Component {

    getMoviesByUrl(url){
        if (url === undefined){
            this.props.searchAction.getPopMovies();
        }
        else {this.props.searchAction.getMoviesByName(url);}
    }

    componentDidMount(){
        this.getMoviesByUrl(this.props.match.params.string);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.match.params.string!==nextProps.match.params.string){
            this.getMoviesByUrl(nextProps.match.params.string);
        }
    }

    render() {
        const { history} = this.props;
        const { foundedMovies} = this.props.movies;
        const { foundedMovie } = this.props.movie;
        const {sortMovies} = this.props.searchAction;

        return <div>
            <Header history={history}/>
            <FildMovies foundedMovies={ foundedMovies }
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
            searchAction: bindActionCreators(searchActions, dispatch),
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(MoviesSearchPage)

MoviesSearchPage.propTypes = {
    foudedMovies: PropTypes.array, foundedMovie: PropTypes.object, sortMovies: PropTypes.func
};