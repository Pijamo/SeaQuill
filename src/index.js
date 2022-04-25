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
                        
                        {/* <Route path="/service-details" component={ ServiceDetails } /> */}
                        {/* <Route path="/portfolio-details" component={ PortfolioDetails } />
                        <Route path="/team" component={ Team } />
                        <Route path="/team-details" component={ TeamDetails } />
                        <Route path="/coming-soon" component={ ComingSoon } />
                        <Route path="/404" component={ Error } />
                        <Route path="/location" component={ Location } />
                        <Route path="/shop" component={ Shop } />
                        <Route path="/shop-grid" component={ ShopGrid } />
                        
                        <Route path="/shop-right-sidebar" component={ ShopRightSidebar } />

                        

                        
                        <Route path="/add-listing" component={ AddListing } />
                        <Route path="/wishlist" component={ Wishlist } />
                        <Route path="/order-tracking" component={ OrderTracking } />
                        <Route path="/history" component={ History } /> */}
	                </Switch>
	                </div>
                </HashRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('quarter'));
