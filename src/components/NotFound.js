import React, { Component, PropTypes } from 'react'
import '../styles/notFound.css'

export default class NotFoundPage extends Component {
    render() {
        return <main>
            <nav></nav>
            <div className="divNoFilmsFound">
                <h1 className="textNoFilmsFound"> No films found </h1>
            </div>
        </main>
    }
}
