import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import Home from './components/home';
import Search from './components/searchPage';

import About from './components/about';
import Service from './components/service';
import ServiceDetails from './components/service-details';
import Portfolio from './components/portfolio';
import PortfolioV2 from './components/portfolio-v2';
import PortfolioDetails from './components/portfolio-details';
import Team from './components/team';
import TeamDetails from './components/team-details';
import Faq from './components/faq';
import ComingSoon from './components/coming-soon';
import Error  from './components/404';
import Location  from './components/location';

import Shop from './components/shop';
import ShopGrid from './components/shop-grid';
import ProdductDetails from './components/PropertyDetails';
import ShopLeftSidebar from './components/shop-left-sidebar';
import ShopRightSidebar from './components/shop-right-sidebar';

import Contact from './components/contact';
import Cart from './components/cart';
import Checkout from './components/checkout';
import MyAccount from './components/my-account';
import Login from './components/login';
import Register from './components/register';
import AddListing from './components/add-listing';
import Wishlist from './components/wishlist';
import OrderTracking from './components/order-tracking';
import History from './components/history';


class Root extends Component {
    render() {
        return(
                <HashRouter basename="/">
	                <div>
	                <Switch>
	                    <Route exact path="/" component={ Home } />          
                        <Route path="/search" component={ Search } />

                        <Route path="/quiz" component={ Quiz }/>

                        <Route path="/about" component={About} />
                        <Route path="/service" component={Service} />
                        <Route path="/service-details" component={ ServiceDetails } />
                        <Route path="/portfolio" component={ Portfolio } />
                        <Route path="/portfolio-v2" component={ PortfolioV2 } />
                        <Route path="/portfolio-details" component={ PortfolioDetails } />
                        <Route path="/team" component={ Team } />
                        <Route path="/team-details" component={ TeamDetails } />
                        <Route path="/faq" component={ Faq } />
                        <Route path="/coming-soon" component={ ComingSoon } />
                        <Route path="/404" component={ Error } />
                        <Route path="/location" component={ Location } />
                        <Route path="/shop" component={ Shop } />
                        <Route path="/shop-grid" component={ ShopGrid } />
                        <Route path="/shop-left-sidebar" component={ ShopLeftSidebar } />
                        <Route path="/shop-right-sidebar" component={ ShopRightSidebar } />

                        <Route path="/property/:id" component={ ProdductDetails } />

                        <Route path="/contact" component={ Contact } />
                        <Route path="/cart" component={ Cart } />
                        <Route path="/checkout" component={ Checkout } />
                        <Route path="/my-account" component={ MyAccount } />
                        <Route path="/login" component={ Login } />
                        <Route path="/register" component={ Register } />
                        <Route path="/add-listing" component={ AddListing } />
                        <Route path="/wishlist" component={ Wishlist } />
                        <Route path="/order-tracking" component={ OrderTracking } />
                        <Route path="/history" component={ History } />
	                </Switch>
	                </div>
                </HashRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('quarter'));
