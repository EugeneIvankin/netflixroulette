import React, { Component, PropTypes } from 'react'

import Header from "../components/Header";
import Main from "../components/Main";
import * as searchActions from '../actions/SearchActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class StartPage extends Component {
    render() {
        const {getMoviesByDirector} = this.props.searchAction;
        const {history} = this.props;
        return <div>
             <Header getMoviesByName={getMoviesByDirector} history={history}/>
             <Main/>
        </div>
    }
}

function mapDispatchToProps(dispatch) {
    return {
        searchAction: bindActionCreators(searchActions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(StartPage)