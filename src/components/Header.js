import React, { Component, PropTypes } from 'react'
import '../styles/header.css'

export default class Header extends Component {
    render() {
        return <header>
            <p className="logo">netflixroulette</p>
            <h3>FIND YOUR MOVIE</h3>
            <input placeholder="Enter your movie"></input>
            <div className="searchDiv">
            <h5>SEARCH BY</h5>
            <button><h5 className="textButton">TITLE</h5></button>
            <button><h5 className="textButton">DIRECTOR</h5></button>
            <button className="searchButton"><h3 className="textSearchButton">SEARCH</h3></button>
            </div>
        </header>
    }
}
