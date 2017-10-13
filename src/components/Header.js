import React, { Component } from 'react'
import '../styles/header.css'


export default class Header extends Component {

    searchOnTitle = true;
    searchOnDirector = false;

    choiceSearchClick = (e) => {
        if (e.target.innerText == "TITLE"){
            this.searchOnTitle = true;
            this.searchOnDirector = false;
            document.getElementById('title').style.backgroundColor = "#f55263";
            document.getElementById('director').style.backgroundColor = "#3c3c3c";
        }
        else if (e.target.innerText == "DIRECTOR"){
            this.searchOnTitle = false;
            this.searchOnDirector = true;
            document.getElementById('title').style.backgroundColor = "#3c3c3c";
            document.getElementById('director').style.backgroundColor = "#f55263";
        }
    };

    searchClick = () => { // прочитать bind, call apply
        if (this.searchOnTitle){
            this.props.getMoviesByName(this.input.value);
        }
        else if ( this.searchOnDirector ){
            this.props.getMoviesByDirector(this.input.value);
        }
        this.props.history.push(`/search/${this.input.value}`);
    };

    // прочитать про инпут, сделать форм

    render() {
        return <header>
            <div className="divLogo">
                <p className="logo">netflixroulette</p>
            </div>
            <h3>FIND YOUR MOVIE</h3>
            <input placeholder="Enter your movie" name="title"  ref={node => {this.input = node;}}></input>
            <div className="searchDiv">
                <h5>SEARCH BY</h5>
                <button id="title" onClick={this.choiceSearchClick}><h5 className="textButton">TITLE</h5></button>
                <button id="director" onClick={this.choiceSearchClick}><h5 className="textButton">DIRECTOR</h5></button>
                <button className="searchButton" onClick={this.searchClick} ><h3 className="textSearchButton">SEARCH</h3></button>
            </div>
        </header>
    }
}

