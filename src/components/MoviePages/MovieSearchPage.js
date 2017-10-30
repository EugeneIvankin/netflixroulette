import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Header from "../Header/Header";
import SortBoard from "../SortBoard/SortBoard"
import FildMovies from "../FildMovies/FildMovies"


export default class MoviesSearchPage extends Component {

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
            <SortBoard numberOfMovies={foundedMovies.length}
                       sortMovies={sortMovies}/>
            <FildMovies foundedMovies={ foundedMovies }
                        foundedMovie={foundedMovie}/>
        </div>

    }
}

MoviesSearchPage.propTypes = {
    foudedMovies: PropTypes.array, foundedMovie: PropTypes.object, sortMovies: PropTypes.func
};