import React, { Component, PropTypes } from 'react'
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import StartPage from "./StartPage";
import MovieDetailPage from "./MovieDetailPage"
import MoviesSearchPage from "./MoviesSearchPage"


export default  class App extends Component {
    render() {
       return <div>
           <Switch>
               <Route exact path='/' component={StartPage}/>
               <Route exact path='/search/:string' component={MoviesSearchPage}/>
               <Route exact path='/film/:string' component={MovieDetailPage}/>
           </Switch>

           {/* footer*/}
       </div>
    }
}
