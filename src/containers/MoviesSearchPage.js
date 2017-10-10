import React, { Component, PropTypes } from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import MoviesSearch from "../components/MoviesSearch"


export default class MoviesSearchPage extends Component {
    render() {
        return <div>
            <Header/>
            <MoviesSearch/>
            <Footer/>
        </div>

    }
}
