import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SortBoard.css';


export default class SortBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByDate: true,
      sortByRating: true,
      styleSortByDate: 'off',
      styleSortByRating: 'off',
    };
  }

  sortByDate = () => {
    const { sortMovies } = this.props;
    if (this.state.sortByDate) {
      this.state.sortByDate = false;
      this.state.sortByRating = true;
      this.state.styleSortByDate = 'on';
      this.state.styleSortByRating = 'off';
      sortMovies('date');
    }
  };

  sortByRating = () => {
    const { sortMovies } = this.props;
    if (this.state.sortByRating) {
      this.state.sortByRating = false;
      this.state.sortByDate = true;
      this.state.styleSortByDate = 'off';
      this.state.styleSortByRating = 'on';
      sortMovies('rating');
    }
  };

  render() {
    return (
      <nav>
        <p className="movies-found-text"> {this.props.numberOfMovies} movies found </p>
        <p className="sort-by-text"> Sort by </p>
        <button
          className={this.state.styleSortByDate}
          onClick={this.sortByDate}
          onKeyPress={this.handleKeyPress}
        >
          realease date
        </button>
        <button
          className={this.state.styleSortByRating}
          onClick={this.sortByRating}
          onKeyPress={this.handleKeyPress}
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
