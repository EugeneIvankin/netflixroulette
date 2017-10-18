import React, { Component } from 'react'
import '../styles/header.css'


export default class Header extends Component {

    constructor(props){
        super(props);
        this.state = {value:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.history.push(`/search/${this.state.value}`);
    }

    // прочитать bind, call apply
    // прочитать про инпут, сделать форм
    //убарть ref, создав контролируемый компонент

    render() {
        return <header>
            <div className="divLogo">
                <p className="logo">netflixroulette</p>
            </div>
            <h3>FIND YOUR MOVIE</h3>
            <form className="searchDiv" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter your movie"></input>
                <button type="submit"><h3 className="textSearchButton">SEARCH</h3></button>
            </form>
        </header>
    }
}
