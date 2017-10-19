import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/moviesSearich.css'
import Movie from './Movie'


export default class Main extends Component {
    getMovie = (movieId) => {
        this.props.history.push(`/film/${movieId}`);
        window.scrollTo(0,0);
    };

    renderList(){
        const {foundedMovies} = this.props;
        return foundedMovies.map((item)=>
               <Movie item={item} getMovie={this.getMovie}  key={item.movieId}/>);
    }

    render() {
        return <main>
            <nav></nav>
            <div className="main">
                {this.renderList()}
            </div>
        </main>
    }
}

Main.propTypes = {
 foundedMovies: PropTypes.array.isRequired
};
