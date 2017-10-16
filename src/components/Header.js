import React, { Component } from 'react'
import '../styles/header.css'


export default class Header extends Component {



    searchClick = () => { // прочитать bind, call apply
        this.props.getMoviesByName(this.input.value);
        this.props.history.push(`/search/${this.input.value}`);
    };

    // прочитать про инпут, сделать форм

    //убарть ref, создав контролируемый компонент

    render() {
        return <header>
            <div className="divLogo">
                <p className="logo">netflixroulette</p>
            </div>
            <h3>FIND YOUR MOVIE</h3>
            <input placeholder="Enter your movie" name="title"  ref={node => {this.input = node;}}></input>
            <div className="searchDiv">
                <h5>SEARCH BY</h5>
                <button id="title"><h5 className="textButton">TITLE</h5></button>
                <button className="searchButton" onClick={this.searchClick} ><h3 className="textSearchButton">SEARCH</h3></button>
            </div>
        </header>
    }
}

