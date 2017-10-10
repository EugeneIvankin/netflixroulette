import React, { Component, PropTypes } from 'react'
import '../styles/header.css'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

export default class Header extends Component {

    render() {

        const Button = withRouter(({ history}) => (
            <button
                className="searchButton"
                onClick={() => { history.push('/search') }}
            >
                <h3 className="textSearchButton">SEARCH</h3>
            </button>
        ));


        return <header>
            <div className="divLogo">
                <p className="logo">netflixroulette</p>
            </div>
            <h3>FIND YOUR MOVIE</h3>
            <input placeholder="Enter your movie"></input>
            <div className="searchDiv">
            <h5>SEARCH BY</h5>
            <button><h5 className="textButton">TITLE</h5></button>
            <button><h5 className="textButton">DIRECTOR</h5></button>
                <Button/>
            </div>
        </header>
    }
}
