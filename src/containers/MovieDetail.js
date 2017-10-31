import { connect } from 'react-redux';
import * as searchActions from '../actions/SearchActions';
import { bindActionCreators } from 'redux';
import * as movieDetailAction from '../actions/MovieDetailActions';
import MovieDetailPage from '../components/MoviePages/MovieDetailPage';


function mapStateToProps(state) {
  return {
    movies: state.searchMovies,
    movie: state.movieDetail
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sortMovies: bindActionCreators(searchActions.sortMovies, dispatch),
    getMovieInfo: bindActionCreators(movieDetailAction.getMovieInfo, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage);