import React, { Component, PropTypes } from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main"
import MovieDetail from "../components/MovieDetail"
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";


export default class App extends Component {
    render() {
       return <div>

           <Switch>
              {/* <Route exact path='/' component={MovieDetail}/>
               <Route exact path='/' component={Main}/>*/}
               <Route exact path='/' component={Footer}/>
               {/*<Route path='/roster' component={Roster}/>
               <Route path='/schedule' component={Schedule}/>*/}
           </Switch>

          {/* <MovieDetail/>
           <Header/>
           <Main/>
           <Footer/>*/}
       </div>

    }
}
