import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SortBoard.css';


export default class SortBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByDate: true,
      sortByRating: true,
    };
  }

  sortByDate = () => {
    const { sortMovies } = this.props;
    this.setState({
      sortByDate: false,
      sortByRating: true,
    });
    sortMovies('date');
  };

  sortByRating = () => {
    const { sortMovies } = this.props;
    this.setState({
      sortByDate: true,
      sortByRating: false,
    });
    sortMovies('rating');
  };

  render() {
    return (
      <nav>
        <p className="movies-found-text"> {this.props.numberOfMovies} movies found </p>
        <p className="sort-by-text"> Sort by </p>
        <button
          className={`button-sort-by-date ${!this.state.sortByDate ? 'button-sort-by-date_active' : ''}`}
          onClick={this.sortByDate}
          disable={!this.state.sortByDate}
        >
          realease date
        </button>
        <button
          className={`button-sort-by-rating ${!this.state.sortByRating ? 'button-sort-by-rating_active' : ''}`}
          onClick={this.sortByRating}
          disable={!this.state.sortByRating}
        >
          rating
        </button>
      </nav>
    );
  }
}

SortBoard.propTypes = {
  numberOfMovies: PropTypes.number.isRequired,
  sortMovies: PropTypes.func.isRequired,
};
