import React, { Component, PropTypes } from 'react'
import Footer from "../components/Footer";
import MovieDetail from "../components/MovieDetail";
import MoviesSearch from "../components/MoviesSearch"


export default class MovieDetailPage extends Component {
    render() {
        return <div>
            <MovieDetail/>
            <MoviesSearch/>
            <Footer/>
        </div>

    }
}
