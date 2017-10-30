import React, { Component } from 'react'
import './header.css'


export default class Header extends Component {

    constructor(props){
        super(props);
        this.state = {value:''};
    }

    handleChange = (event) =>{
        this.setState({value: event.target.value})
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.history.push(`/search/${this.state.value}`);
    }

    render() {
        return <header>
            <div className="div-logo">
                <p className="logo">netflixroulette</p>
            </div>
            <h3>FIND YOUR MOVIE</h3>
            <form className="search-div" onSubmit={this.handleSubmit}>
                <input type="text" name="movie" value={this.state.value} onChange={this.handleChange} placeholder="Enter your movie"></input>
                <button type="submit">SEARCH</button>
            </form>
        </header>
    }

    //разкинуть тесты
}
