import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LogoURL from '../../assets/img/Logo_light.svg'

class Navbar extends Component {
	
    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
		<div >
           <header className="ltn__header-area ltn__header-5 ltn__header-transparent--- gradient-color-4---">
			<div className="ltn__header-top-area section-bg-6 top-area-color-white---">
				<div className="container">
				<div className="row">
					<div className="col-md-7">
					<div className="ltn__top-bar-menu">
						
					</div>
					</div>
					<div className="col-md-5">
					<div className="top-bar-right text-end">
					
					</div>
					</div>
				</div>
				</div>
			</div>
			<div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
				<div className="container">
				<div className="row">
					<div className="col">
					<div className="site-logo-wrap">
						<div className="site-logo go-top">
						<Link to="/"><img src={LogoURL} alt="Logo" style={{height:"50px"}}/></Link>
						</div>
						
					</div>
					</div>
					<div className="col header-menu-column">
					<div className="header-menu d-none d-xl-block">
					</div>
					</div>
					<div className="col ltn__header-options ltn__header-options-2 mb-sm-20">
					
					{/* user-menu */}
					<div className="ltn__drop-menu user-menu">
						<ul>
						<li>
							<Link to="#"><i className="icon-user" /></Link>
							<ul className="go-top">
							<li><Link to="/login">Sign in</Link></li>
							<li><Link to="/register">Register</Link></li>
							<li><Link to="/my-account">My Account</Link></li>
							</ul>
						</li>
						</ul>
					</div>
					
					</div>
				</div>
				</div>
			</div>
			</header>
			{/* <div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
				<div className="ltn__utilize-menu-inner ltn__scrollbar">
					<div className="ltn__utilize-menu-head">
					<div className="site-logo">
						<Link to="/"><img src={LogoURL} alt="Logo" /></Link>
					</div>
					<button className="ltn__utilize-close">×</button>
					</div>
					<div className="ltn__utilize-menu-search-form">
					<form action={"#"}>
						<input type="text" placeholder="Search..." />
						<button><i className="fas fa-search" /></button>
					</form>
					</div>
					
				</div>
			</div> */}

		</div>
        )
    }
}


export default Navbar