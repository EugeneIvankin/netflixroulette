import React, { Component, PropTypes } from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import MoviesSearch from "../components/MoviesSearch"
import { connect } from 'react-redux'
import * as searchActions from '../actions/SearchActions'
import { bindActionCreators } from 'redux'


class MoviesSearchPage extends Component {
    render() {
        const {getMoviesByName} = this.props.searchAction;
        const {history} = this.props;
        return <div>
            <Header getMoviesByName={getMoviesByName} history={history}/>
            <MoviesSearch/>
            <Footer/>
        </div>
    }
}

function mapDispatchToProps(dispatch) {
    return {
        searchAction: bindActionCreators(searchActions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(MoviesSearchPage)
