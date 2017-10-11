import React, { Component, PropTypes } from 'react'
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import StartPage from "./StartPage";
import MovieDetailPage from "./MovieDetailPage"
import MoviesSearchPage from "./MoviesSearchPage"
import * as searchActions from '../actions/SearchActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


export default  class App extends Component {
    render() {

       return <div>

           <Switch>
               <Route exact path='/' component={StartPage}/>
               <Route exact path='/search' component={MoviesSearchPage}/>
               <Route exact path='/film' component={MovieDetailPage}/>
           </Switch>
       </div>

    }
}

/*
function mapDispatchToProps(dispatch) {
    return {
        searchAction: bindActionCreators(searchActions, dispatch)
    }
}

export default connect( mapDispatchToProps)(App)*/