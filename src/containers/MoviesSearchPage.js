import React, { Component, PropTypes } from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import MoviesSearch from "../components/MoviesSearch"
import { connect } from 'react-redux'



export default class MoviesSearchPage extends Component {
    render() {

        return <div>
            <Header/>
            <MoviesSearch/>
            <Footer/>
        </div>

    }
}


/*function mapStateToProps (state) {
    return {
        movie: state
    }
}

export default connect(mapStateToProps)(MoviesSearchPage)*/