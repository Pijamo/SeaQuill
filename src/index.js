import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import './index.css';
import Home from './components/home';
import Search from './components/search-form'

import Quiz from './components/quiz-app'
import Results from './components/quiz-results'

import ProdductDetails from './components/property-details';
import Listings from './components/listings';


import MyAccount from './components/my-account';
import LoginV1 from './components/login';
import Register from './components/register';


class Root extends Component {
    render() {
        return(
                <HashRouter basename="/">
	                <div>
	                <Switch>
	                    <Route exact path="/" component={ Home } />   
                        <Route path="/search" component={ Search } />    
                        <Route path="/quiz" component= { Quiz } />
                        <Route path="/results" component= { Results } />
                        <Route path="/listings" component={ Listings } />
                        <Route path="/property/:id" component={ ProdductDetails } />
                        <Route path="/login" component={ LoginV1 } />
                        <Route path="/register" component={ Register } />
                        <Route path="/my-account" component={ MyAccount } />
                        
	                </Switch>
	                </div>
                </HashRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('quarter'));
