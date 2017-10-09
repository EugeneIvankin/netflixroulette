import React, { Component, PropTypes } from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main"
import MovieDetail from "../components/MovieDetail"


export default class App extends Component {
    render() {
       return <div>
           <MovieDetail/>
           {/*<Header/>*/}
           <Main/>
           <Footer/>
       </div>

    }
}
