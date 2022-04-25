import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CopyRight extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

        return (
			<div className="ltn__copyright-area ltn__copyright-2 section-bg-7  plr--5">
			<div className="container-fluid ltn__border-top-2">
				<div className="row">
				
				<div className="ltn__copyright-design clearfix">
				<p align='center'>CIS 550 Web Application - SeaQuills<span className="current-year" /></p>
				</div>
		
				</div>
			</div>
			</div>
        )
    }
}


export default CopyRight