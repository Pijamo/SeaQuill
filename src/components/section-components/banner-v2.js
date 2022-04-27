import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { getCityState } from '../../fetcher';
import AutoCompleteApp from '../autocomplete-app';
// import {StateAutoComplete} from '../components/StateAutocomplete';

class BannerV5 extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		

		return <div className="ltn__slider-area ltn__slider-4">
			<div className="ltn__slide-one-active----- slick-slide-arrow-1----- slick-slide-dots-1----- arrow-white----- ltn__slide-animation-active">
				{/* ltn__slide-item */}
				<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-4 bg-image bg-overlay-theme-black-60" data-bs-bg={publicUrl + "assets/img/slider/11.jpg"}>
					<div className="ltn__slide-item-inner text-left">
						<div className="container">
							<div className="row">
								<div className="col-lg-15 align-self-center">
									<div className="slide-item-car-dealer-form">
										<div className="ltn__car-dealer-form-tab">
											<div className="ltn__tab-menu  text-uppercase">
												<div className="nav">
													<a className="active show" data-bs-toggle="tab" href="#ltn__form_tab_1_1"><i className="fas fa-home" />For Sale</a>
													<a data-bs-toggle="tab" href="#ltn__form_tab_1_2" className><i className="fas fa-home" />For Rent</a>
												</div>
											</div>
											<div className="tab-content">
												<div className="tab-pane fade active show" id="ltn__form_tab_1_1">
													<div className='row'>
														<div className="col-xl-3 col-lg-6 col-md-6">
															<div className="border">
																<input className='mb-0' type="text" placeholder="City" /></div>
														</div>
														<div className="col-xl-3 col-lg-4 col-md-4">
															<div className="border">
																<input className='mb-0' type="text" placeholder="State: Eg. Iowa" /></div>
												
																
																</div>
														<div className="col-xl-2 col-lg-4 col-md-4">
															<div className="border">
																<input className='mb-0' type="text" placeholder="Min Price" /></div>
														</div>
														<div className="col-xl-2 col-lg-4 col-md-4">
															<div className="border">
																<input className='mb-0' type="text" placeholder="Max Price" /></div>
														</div>
														<div className="col-xl-2 col-lg-4 col-md-4">
															<div className="btn-wrapper text-center mt-1 go-top">
																<Link to="/listings" className="btn theme-btn-1 btn-effect-1 text-uppercase">Search</Link>
															</div>
														</div>
													</div>
												</div>
												<div className="tab-pane fade" id="ltn__form_tab_1_2">
												<div className='row'>
														<div className="col-xl-3 col-lg-6 col-md-6">
															<div className="border">
																<input className='mb-0' type="text" placeholder="City" /></div>

														</div>
														<div className="col-xl-3 col-lg-4 col-md-4">
															<div className="border">
																<input className='mb-0' type="text" placeholder="State: Eg. Iowa" /></div>
																
																<AutoCompleteApp/>

														</div>
														<div className="col-xl-2 col-lg-4 col-md-4">
															<div className="border">
																<input className='mb-0' type="text" placeholder="Min Price" /></div>
														</div>
														<div className="col-xl-2 col-lg-4 col-md-4">
															<div className="border">
																<input className='mb-0' type="text" placeholder="Max Price" /></div>
														</div>
														<div className="col-xl-2 col-lg-4 col-md-4">
															<div className="btn-wrapper text-center mt-1 go-top">
																<Link to="/listings" className="btn theme-btn-1 btn-effect-1 text-uppercase">Search</Link>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	
}
	
}



export default BannerV5