import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import testRoute from '../../fetcher';


class Banner extends Component {

		
	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return <div>
			<div className='position-relative'>
				<div className='row vh-100 position-relative'>
					<Link to="/Search" className='col border-end border-2'>
						
						<div className="container">
						<div className="row">
						<div className="col-lg-12">
						<div className="section-title-area text-center">
						<h1 className="section-title"> <br />Search active listings</h1>
						<p>Already know where you want to move? See what's available! <br />
						</p>
						</div>
						</div>
						</div>
						</div>
						<Player
							hover
							loop
							src="https://assets7.lottiefiles.com/packages/lf20_xycki5.json"
							style={{width: '80%' }}
							className="position-absolute top-50 start-50 translate-middle"
						>
							<Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
						</Player>
					</Link>
						<Link to="/quiz" className='col border-start border-2'>
						<div className="container">
						<div className="row">
						<div className="col-lg-12">
						<div className="section-title-area text-center">
						<h1 className="section-title"> <br /> Find new city</h1>
						<p>Not sure where to move? Take this quiz to help help you decide.<br />
						</p>
						</div>
						</div>
						</div>
						</div>
							<Player
								hover
								loop
								src="https://assets7.lottiefiles.com/packages/lf20_OKUNmn.json"
								style={{width: '80%' }}
								className="position-absolute top-50 start-50 translate-middle"
							>
								<Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
							</Player>
						</Link>
				</div>
				<div className="btn-wrapper animated position-absolute top-50 start-50 translate-middle">
					<a className="ltn__video-play-btn bg-red" href="https://www.youtube.com/embed/tQErYMj8Q-I?autoplay=1&showinfo=0" data-rel="lightcase">
						<i className="icon-play"/>
					</a>
				</div>
			</div>
		</div>
	}
}

export default Banner