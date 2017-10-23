import React, { Component } from 'react'
import Header from "../components/Header/Header";
import FildMovies from "../components/FildMovies/FildMovies"
import { connect } from 'react-redux'
import * as searchActions from '../actions/SearchActions'
import { bindActionCreators } from 'redux'
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import MovieDetailPage from "./MovieDetailPage";


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
            {/*<Switch>
                <Route exact path='/' component={Header}/>
                <Route exact path='/search/:string' component={Header}/>
                <Route exact path='/film/:string' component={MovieDetailPage}/>
            </Switch>*/}
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
