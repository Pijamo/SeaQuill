import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page_header extends Component {

    render() {

        let HeaderTitle = this.props.headertitle;
        let publicUrl = process.env.PUBLIC_URL+'/'
        let Subheader = this.props.subheader ? this.props.subheader : HeaderTitle

        return (

		<div className={"ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image "} data-bs-bg={publicUrl+"assets/img/bg/14.jpg"}>
			<div className="container">
				<div className="row">
				<div className="col-lg-12">
					<div className="ltn__breadcrumb-inner">
					<h1 className="page-title">{ HeaderTitle }</h1>
					<div className="ltn__breadcrumb-list">
						<ul>
						<li><Link to="/"><span className="ltn__secondary-color"><i className="fas fa-home" /></span> Home</Link></li>
						<li>{ Subheader }</li>
						</ul>
					</div>
					</div>
				</div>
				</div>
			</div>
		</div>


        )
    }
}

export default Page_header