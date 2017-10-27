import React, { Component } from 'react'
import './FildMovies.css'
import PropTypes from 'prop-types'
import Movie from '../Movie/Movie'
import NotFoundMovies from '../MovieNotFounded/NotFound'


export default class MoviesSearch extends Component {

    constructor(props){
        super(props);
        this.state = {value:''};
       /* this.getMovie = this.getMovie.bind(this);*/
    }

   /* changeColorByClick(sort){
        switch (sort) {
            case 'date':
                document.getElementById('sort-by-date-text').style.color = '#f55263';
                document.getElementById('sort-by-rating-text').style.color = '#414141';
                break;
            case 'rating':
                document.getElementById('sort-by-date-text').style.color = '#414141';
                document.getElementById('sort-by-rating-text').style.color = '#f55263';
                break;
            default:
                document.getElementById('sort-by-date-text').style.color = '#414141';
                document.getElementById('sort-by-rating-text').style.color = '#414141';
        }
    }*/

    getMovie = (movieId) =>{
        this.props.history.push(`/film/${movieId}`);
        window.scrollTo(0,0);
    }

    renderList(){
        const {foundedMovies, foundedMovie} = this.props;
        if (foundedMovies.length !==0){
            return foundedMovies
                .filter(item=>!foundedMovie||foundedMovie.movieId!==item.movieId)
                .map((item) =>
                   <Movie item={item} getMovie={this.getMovie} key={item.movieId}/>
                );
        }
        return <NotFoundMovies/>
    }


    // вынести значения сортировки в стейт

    sortByDate = () => {
        const {sortMovies} = this.props;
        sortMovies('date')
    }

    sortByRating = () =>{
        const {sortMovies} = this.props;
        sortMovies('rating')
    }

    //

    render() {
        const {foundedMovies} = this.props;

        return <main>
            <nav>
                <p className="movies-found-text"> {foundedMovies.length} movies found </p>
                <p className="sort-by-text"> Sort by </p>
                <p id="sort-by-date-text" onClick={this.sortByDate}> realease date</p>
                <p id="sort-by-rating-text" onClick={this.sortByRating}> rating </p>
            </nav>
            <div className="main">
                {this.renderList()}
            </div>
        </main>
    }
}

// имена
// вынести скрол в роут
// стили
// проверить в конструкторе стейт
// убрать лямда
// вынести лист


MoviesSearch.propTypes = {
  foudedMovies: PropTypes.array, foundedMovie: PropTypes.object, sortMovies: PropTypes.func
};


