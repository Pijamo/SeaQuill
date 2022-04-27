import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import parse from 'html-react-parser';
import { getCityState } from '../../fetcher';

function BannerV5() {

	let history = useHistory();

	const [states, setStates] = useState([])
	const [statesMatch, setStatesMatch] = useState([])
	const [citiesMatch, setCitiesMatch] = useState([])
	const [selCity, setSelCity] = useState('')
	const [selState, setSelState] = useState('')
	const [loading, setLoading] = useState(false);

	useEffect(() => {

		testCity();
	}, [])

	function testCity() {
		setLoading(true)
		getCityState().then(res => {
			setStates(res.results)
		}
		)
		setLoading(false)
	}

	function handleSubmit(event) {

		const regex = new RegExp(`${selState}`, "gi")

		function isState(state) {
			return state.state.match(regex)
		}

		const state = states.find(isState)

		history.push({ pathname: "/listings", state: { stateData: { state: state.stateCode, city: selCity } } })
		// history.push({ pathname: "/listings", state: { ratingData: userData }})
	}

	function handleState(event) {
		setSelState(event.target.value)
	}

	function handleCity(event) {
		const value = event.target.value
		setSelCity(value)
		searchCity(value)
	}

	function searchCity(value) {

		const regex = new RegExp(`${value}`, "gi");
		let cities = []

		function contains(state) {
			state.cities.map((e) => {
				if (e.match(regex)) {
					if (!cities.includes(e)) {
						cities.push(e)
					}
				}
			})
			return state.cities.some(e => regex.test(e))
		}

		console.log(states)

		let matches = states.filter(contains)
		setStatesMatch(matches)
		setCitiesMatch(cities)
	}

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
												{/* <a data-bs-toggle="tab" href="#ltn__form_tab_1_2" className><i className="fas fa-home" />For Rent</a> */}
											</div>
										</div>
										<div className="tab-content">
											<div className="tab-pane fade active show" id="ltn__form_tab_1_1">
												<form onSubmit={handleSubmit}>
												<div className='row'>
													<div className="col-xl-3 col-lg-6 col-md-6">
														<div className="border">
															<input 
																list="cities"
																className='mb-0' 
																type="text" 
																placeholder="City" 
																value={selCity}
																required onChange={handleCity}
																/>
															
															<datalist id="cities">
																{citiesMatch.splice(0,10).map((item, key) =>
																<option key={key} value={item}/>
																)}
															</datalist>
														</div>
													</div>
													<div className="col-xl-3 col-lg-4 col-md-4">
														<div className="border">
														<input 
																className='mb-0' 
																type="text" 
																placeholder="State: Eg. Iowa"
																list= {(statesMatch.length == 0) ? "ada" : "states" }
																value = {selState}
																required onChange = {handleState}
															/>

															<datalist id="ada">
																{states.map((item, key) =>
																<option key={key} value={item.state}/>
																)}
															</datalist>
															
															<datalist id="states">
																{statesMatch.map((item, key) =>
																<option key={key} value={item.state}/>
																)}
															</datalist>
															</div>
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
															{/* <Link to="/listings" className="btn theme-btn-1 btn-effect-1 text-uppercase">Search</Link> */}
															<input className="btn mb-0" type='submit' value="Submit"/>
														</div>
													</div>
												</div>
												</form>
											</div>
											{/* <div className="tab-pane fade" id="ltn__form_tab_1_2">
												<div className='row'>
														<div className="col-xl-3 col-lg-6 col-md-6">
															<div className="border">
																<input className='mb-0' type="text" placeholder="City" /></div>
														</div>
														<div className="col-xl-3 col-lg-4 col-md-4">
															<div className="border">
																<input className='mb-0' type="text" placeholder="State Code" /></div>
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
												</div> */}
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

export default BannerV5