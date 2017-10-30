import React, { Component } from 'react'
import './SortBoard.css'
import PropTypes from 'prop-types'

export default class SortBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
            sortByDate: true,
            sortByRating: true,
            styleSortByDate: "off",
            styleSortByRating: "off"
        };
    }

    sortByDate = () => {
        const {sortMovies} = this.props;
        if (this.state.sortByDate){
            this.state.sortByDate = false;
            this.state.sortByRating = true;
            this.state.styleSortByDate = "on";
            this.state.styleSortByRating = "off";
            sortMovies('date')
        }
    };

    sortByRating = () =>{
        const {sortMovies} = this.props;
        if (this.state.sortByRating){
            this.state.sortByRating = false;
            this.state.sortByDate = true;
            this.state.styleSortByDate = "off";
            this.state.styleSortByRating = "on";
            sortMovies('rating')
        }
    };

    render() {
        return <nav>
            <p className="movies-found-text"> {this.props.numberOfMovies} movies found </p>
            <p className="sort-by-text"> Sort by </p>
            <p className={this.state.styleSortByDate} onClick={this.sortByDate}> realease date</p>
            <p className={this.state.styleSortByRating} onClick={this.sortByRating}> rating </p>
        </nav>
    }
}

SortBoard.propTypes = {
    numberOfMovies: PropTypes.number.isRequired,
    sortMovies: PropTypes.func.isRequired
};