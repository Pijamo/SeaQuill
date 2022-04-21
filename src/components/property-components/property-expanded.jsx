import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Realtor from '../components/RealtorDetails'

const PropertyDetails = ( { property } ) => {

    let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__shop-details-area pb-10">
				{console.log(property)}
				<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-12">
					<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-category">
							<Link to="#">Featured</Link>
							</li>
							<li className="ltn__blog-category">
							<Link className="bg-orange" to="#">{textFormat(property.prop_common?.status)}</Link>
							</li>
							<li className="ltn__blog-date">
							<i className="far fa-calendar-alt" />This will be Missing
							</li>
						</ul>
						</div>
						<h1>Some Name To Decide</h1>
						<label><span className="ltn__secondary-color"><i className="flaticon-pin" /></span> {property.address?.line}, {property.address?.state}</label>
						<h4 className="title-2">Description</h4>
						<p>{property.prop_common?.description}</p>
						<h4 className="title-2">Property Detail</h4>  
						<div className="property-detail-info-list section-bg-1 clearfix mb-60">                          
						<ul>
							<li><label>Property ID:</label> <span>HZ29</span></li>
							
							{property.prop_common?.sqft && 
							<li><label>Home Area: </label> <span>{property.prop_common.sqft} sqft</span></li>
							}
							
							{property.prop_common?.rooms && 
							<li><label>Rooms:</label> <span>{property.prop_common.rooms}</span></li>
							}

							{property.prop_common?.garage && 
							<li><label>Garage:</label> <span>{property.prop_common.garage}</span></li>
							}

							{property.prop_common?.bath && 
							<li><label>Baths:</label> <span>{property.prop_common.bath}</span></li>
							}

							{property.prop_common?.year_built && 
							<li><label>Year built:</label> <span>{property.prop_common.year_built}</span></li>
							}

							{property.prop_common?.stories && 
							<li><label>Stories:</label> <span>{property.prop_common.stories}</span></li>
							}
							
						</ul>
						<ul>
							<li><label>Lot Area:</label> <span>HZ29 </span></li>
							
							{property.prop_common?.lot_sqft && 
							<li><label>Lot dimensions:</label> <span>{property.prop_common.lot_sqft} sqft</span></li>
							}

							{property.prop_common?.bed && 
							<li><label>Beds:</label> <span>{property.prop_common.bed}</span></li>
							}
							
							{property.prop_common?.price && 
							<li><label>Price:</label> <span>$ {property.prop_common.price}</span></li>
							}
							
							{property.prop_common?.status && 
							<li><label>Property Status:</label> <span style={{textTransform: "capitalize"}}>{textFormat(property.prop_common.status)}</span></li>
							}
							
						</ul>
						</div>
						<h4 className="title-2">Facts and Features</h4>
						<div className="property-detail-feature-list clearfix mb-45">                            
						<ul>
							<li>
							<div className="property-detail-feature-list-item">
								<i className="flaticon-double-bed" />
								<div>
								<h6>Living Room</h6>
								<small>20 x 16 sq feet</small>
								</div>
							</div>
							</li>
							<li>
							<div className="property-detail-feature-list-item">
								<i className="flaticon-double-bed" />
								<div>
								<h6>Garage</h6>
								<small>20 x 16 sq feet</small>
								</div>
							</div>
							</li>
							<li>
							<div className="property-detail-feature-list-item">
								<i className="flaticon-double-bed" />
								<div>
								<h6>Dining Area</h6>
								<small>20 x 16 sq feet</small>
								</div>
							</div>
							</li>
							<li>
							<div className="property-detail-feature-list-item">
								<i className="flaticon-double-bed" />
								<div>
								<h6>Bedroom</h6>
								<small>20 x 16 sq feet</small>
								</div>
							</div>
							</li>
							<li>
							<div className="property-detail-feature-list-item">
								<i className="flaticon-double-bed" />
								<div>
								<h6>Bathroom</h6>
								<small>20 x 16 sq feet</small>
								</div>
							</div>
							</li>
							<li>
							<div className="property-detail-feature-list-item">
								<i className="flaticon-double-bed" />
								<div>
								<h6>Gym Area</h6>
								<small>20 x 16 sq feet</small>
								</div>
							</div>
							</li>
							<li>
							<div className="property-detail-feature-list-item">
								<i className="flaticon-double-bed" />
								<div>
								<h6>Garden</h6>
								<small>20 x 16 sq feet</small>
								</div>
							</div>
							</li>
							<li>
							<div className="property-detail-feature-list-item">
								<i className="flaticon-double-bed" />
								<div>
								<h6>Parking</h6>
								<small>20 x 16 sq feet</small>
								</div>
							</div>
							</li>
						</ul>
						</div>
						<h4 className="title-2">From Our Gallery</h4>
						<div className="ltn__property-details-gallery mb-30">
						<div className="row">
							<div className="col-md-6">
							<a href={publicUrl+"assets/img/others/14.jpg"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/others/14.jpg"} alt="Image" />
							</a>
							<a href={publicUrl+"assets/img/others/15.jpg"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/others/15.jpg"} alt="Image" />
							</a>
							</div>
							<div className="col-md-6">
							<a href={publicUrl+"assets/img/others/16.jpg"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/others/16.jpg"} alt="Image" />
							</a>
							</div>
						</div>
						</div>
						<h4 className="title-2 mb-10">Amenities</h4>
						<div className="property-details-amenities mb-60">
						<div className="row">
							<div className="col-lg-4 col-md-6">
							<div className="ltn__menu-widget">
								<ul>
								<li>
									<label className="checkbox-item">Air Conditioning
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">Gym
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">Microwave
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">Swimming Pool
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">WiFi
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								</ul>
							</div>
							</div>
							<div className="col-lg-4 col-md-6">
							<div className="ltn__menu-widget">
								<ul>
								<li>
									<label className="checkbox-item">Barbeque
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">Recreation
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">Microwave
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">Basketball Cout
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">Fireplace
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								</ul>
							</div>
							</div>
							<div className="col-lg-4 col-md-6">
							<div className="ltn__menu-widget">
								<ul>
								<li>
									<label className="checkbox-item">Refrigerator
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">Window Coverings
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">Washer
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">24x7 Security
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">Indoor Game
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								</ul>
							</div>
							</div>
						</div>
						</div>
						<h4 className="title-2">Location</h4>
						<div className="property-details-google-map mb-60">
						<iframe src={`https://maps.google.com/maps?q=${property.address?.location.lat},${property.address?.location.lon}&hl=en&z=14&amp&output=embed`} width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
						</div>
						<h4 className="title-2">Floor Plans</h4>
						{/* APARTMENTS PLAN AREA START */}
						<div className="ltn__apartments-plan-area product-details-apartments-plan mb-60">
						<div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center---">
							<div className="nav">
							<a data-bs-toggle="tab" href="#liton_tab_3_1">First Floor</a>
							<a className="active show" data-bs-toggle="tab" href="#liton_tab_3_2">Second Floor</a>
							<a data-bs-toggle="tab" href="#liton_tab_3_3" >Third Floor</a>
							<a data-bs-toggle="tab" href="#liton_tab_3_4" >Top Garden</a>
							</div>
						</div>
						<div className="tab-content">
							<div className="tab-pane fade" id="liton_tab_3_1">
							<div className="ltn__apartments-tab-content-inner">
								<div className="row">
								<div className="col-lg-7">
									<div className="apartments-plan-img">
									<img src={publicUrl+"assets/img/others/10.png"} alt="#" />
									</div>
								</div>
								<div className="col-lg-5">
									<div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
									<h2>First Floor</h2>
									<p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
										Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
										eiusmod tempor.Incididunt labore et dolore magna aliqua.
										sed ayd minim veniam.</p>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="product-details-apartments-info-list  section-bg-1">
									<div className="row">
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
											<li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
											</ul>
										</div>
										</div>
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Belcony/Pets</label> <span>Allowed</span></li>
											<li><label>Lounge</label> <span>650 Sq. Ft</span></li>
											</ul>
										</div>
										</div>
									</div>
									</div>
								</div>
								</div>
							</div>
							</div>
							<div className="tab-pane fade active show" id="liton_tab_3_2">
							<div className="ltn__product-tab-content-inner">
								<div className="row">
								<div className="col-lg-7">
									<div className="apartments-plan-img">
									<img src={publicUrl+"assets/img/others/10.png"} alt="#" />
									</div>
								</div>
								<div className="col-lg-5">
									<div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
									<h2>Second Floor</h2>
									<p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
										Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
										eiusmod tempor.Incididunt labore et dolore magna aliqua.
										sed ayd minim veniam.</p>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="product-details-apartments-info-list  section-bg-1">
									<div className="row">
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
											<li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
											</ul>
										</div>
										</div>
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Belcony/Pets</label> <span>Allowed</span></li>
											<li><label>Lounge</label> <span>650 Sq. Ft</span></li>
											</ul>
										</div>
										</div>
									</div>
									</div>
								</div>
								</div>
							</div>
							</div>
							<div className="tab-pane fade" id="liton_tab_3_3">
							<div className="ltn__product-tab-content-inner">
								<div className="row">
								<div className="col-lg-7">
									<div className="apartments-plan-img">
									<img src={publicUrl+"assets/img/others/10.png"} alt="#" />
									</div>
								</div>
								<div className="col-lg-5">
									<div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
									<h2>Third Floor</h2>
									<p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
										Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
										eiusmod tempor.Incididunt labore et dolore magna aliqua.
										sed ayd minim veniam.</p>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="product-details-apartments-info-list  section-bg-1">
									<div className="row">
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
											<li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
											</ul>
										</div>
										</div>
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Belcony/Pets</label> <span>Allowed</span></li>
											<li><label>Lounge</label> <span>650 Sq. Ft</span></li>
											</ul>
										</div>
										</div>
									</div>
									</div>
								</div>
								</div>
							</div>
							</div>
							<div className="tab-pane fade" id="liton_tab_3_4">
							<div className="ltn__product-tab-content-inner">
								<div className="row">
								<div className="col-lg-7">
									<div className="apartments-plan-img">
									<img src={publicUrl+"assets/img/others/10.png"} alt="#" />
									</div>
								</div>
								<div className="col-lg-5">
									<div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
									<h2>Top Garden</h2>
									<p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
										Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
										eiusmod tempor.Incididunt labore et dolore magna aliqua.
										sed ayd minim veniam.</p>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="product-details-apartments-info-list  section-bg-1">
									<div className="row">
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
											<li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
											</ul>
										</div>
										</div>
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Belcony/Pets</label> <span>Allowed</span></li>
											<li><label>Lounge</label> <span>650 Sq. Ft</span></li>
											</ul>
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
						{/* APARTMENTS PLAN AREA END */}
						<h4 className="title-2">Property Video</h4>
						<div className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50 bg-image mb-60" data-bs-bg={publicUrl+"assets/img/others/5.jpg"}>
						<a className="ltn__video-icon-2 ltn__video-icon-2-border---" href="https://www.youtube.com/embed/eWUxqVFBq74?autoplay=1&showinfo=0" data-rel="lightcase:myCollection">
							<i className="fa fa-play" />
						</a>
						</div>
						<div className="ltn__shop-details-tab-content-inner--- ltn__shop-details-tab-inner-2 ltn__product-details-review-inner mb-60">
						<hr />
						</div>
						<h4 className="title-2">Related Properties</h4>
						<div className="row">
						{/* ltn__product-item */}
						<div className="col-xl-6 col-sm-6 col-12 go-top">
							<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
							<div className="product-img">
								<Link to="/shop"><img src={publicUrl+"assets/img/product-3/1.jpg"} alt="#" /></Link>
								<div className="real-estate-agent">
								<div className="agent-img">
									<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
								</div>
								</div>
							</div>
							<div className="product-info">
								<div className="product-badge">
								<ul>
									<li className="sale-badg">For Rent</li>
								</ul>
								</div>
								<h2 className="product-title"><Link to="/shop">New Apartment Nice View</Link></h2>
								<div className="product-img-location">
								<ul>
									<li>
									<Link to="/shop"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
									</li>
								</ul>
								</div>
								<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
								<li><span>3 </span>
									Bedrooms
								</li>
								<li><span>2 </span>
									Bathrooms
								</li>
								<li><span>3450 </span>
									square Ft
								</li>
								</ul>
								<div className="product-hover-action">
								<ul>
									<li>
									<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
										<i className="flaticon-expand" />
									</a>
									</li>
									<li>
									<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
										<i className="flaticon-heart-1" /></a>
									</li>
									<li>
									<Link to="/shop" title="Compare">
										<i className="flaticon-add" />
									</Link>
									</li>
								</ul>
								</div>
							</div>
							<div className="product-info-bottom">
								<div className="product-price">
								<span>$349,00<label>/Month</label></span>
								</div>
							</div>
							</div>
						</div>
						{/* ltn__product-item */}
						<div className="col-xl-6 col-sm-6 col-12 go-top">
							<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
							<div className="product-img">
								<Link to="/shop"><img src={publicUrl+"assets/img/product-3/2.jpg"} alt="#" /></Link>
								<div className="real-estate-agent">
								<div className="agent-img">
									<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
								</div>
								</div>
							</div>
							<div className="product-info">
								<div className="product-badge">
								<ul>
									<li className="sale-badg">For Sale</li>
								</ul>
								</div>
								<h2 className="product-title"><Link to="/shop">New Apartment Nice View</Link></h2>
								<div className="product-img-location">
								<ul>
									<li>
									<Link to="/shop"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
									</li>
								</ul>
								</div>
								<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
								<li><span>3 </span>
									Bedrooms
								</li>
								<li><span>2 </span>
									Bathrooms
								</li>
								<li><span>3450 </span>
									square Ft
								</li>
								</ul>
								<div className="product-hover-action">
								<ul>
									<li>
									<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
										<i className="flaticon-expand" />
									</a>
									</li>
									<li>
									<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
										<i className="flaticon-heart-1" /></a>
									</li>
									<li>
									<a href="portfolio-details.html" title="Compare">
										<i className="flaticon-add" />
									</a>
									</li>
								</ul>
								</div>
							</div>
							<div className="product-info-bottom">
								<div className="product-price">
								<span>$349,00<label>/Month</label></span>
								</div>
							</div>
							</div>
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-4">
					<aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
						{/* Realtor Widget */}
						<Realtor realtor = {property.agent}/>

						{/* Form Widget */}
						<div className="widget ltn__form-widget">
						<h4 className="ltn__widget-title ltn__widget-title-border-2">Drop Messege For Book</h4>
						<form action="#">
							<input type="text" name="yourname" placeholder="Your Name*" />
							<input type="text" name="youremail" placeholder="Your e-Mail*" />
							<textarea name="yourmessage" placeholder="Write Message..." defaultValue={""} />
							<button type="submit" className="btn theme-btn-1">Send Messege</button>
						</form>
						</div>
						{/* Featured Homes Widget */}
						<div className="widget ltn__top-rated-product-widget go-top">
						<h4 className="ltn__widget-title ltn__widget-title-border-2">Featured Homes</h4>
						<ul>
							<li>
							<div className="top-rated-product-item clearfix">
								<div className="top-rated-product-img">
								<Link to="/product-details"><img src={publicUrl+"assets/img/product/1.png"} alt="#" /></Link>
								</div>
								<div className="top-rated-product-info">
								<div className="product-ratting">
									<ul>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									</ul>
								</div>
								<h6><Link to="/shop">Luxury House In Greenville </Link></h6>
								<div className="product-price">
									<span>$30,000.00</span>
									<del>$35,000.00</del>
								</div>
								</div>
							</div>
							</li>
							<li>
							<div className="top-rated-product-item clearfix">
								<div className="top-rated-product-img">
								<Link to="/product-details"><img src={publicUrl+"assets/img/product/2.png"} alt="#" /></Link>
								</div>
								<div className="top-rated-product-info">
								<div className="product-ratting">
									<ul>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									</ul>
								</div>
								<h6><Link to="/shop">Apartment with Subunits</Link></h6>
								<div className="product-price">
									<span>$30,000.00</span>
									<del>$35,000.00</del>
								</div>
								</div>
							</div>
							</li>
							<li>
							<div className="top-rated-product-item clearfix">
								<div className="top-rated-product-img">
								<Link to="/product-details"><img src={publicUrl+"assets/img/product/3.png"} alt="#" /></Link>
								</div>
								<div className="top-rated-product-info">
								<div className="product-ratting">
									<ul>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star-half-alt" /></a></li>
									<li><a href="#"><i className="far fa-star" /></a></li>
									</ul>
								</div>
								<h6><Link to="/shop">3 Rooms Manhattan</Link></h6>
								<div className="product-price">
									<span>$30,000.00</span>
									<del>$35,000.00</del>
								</div>
								</div>
							</div>
							</li>
						</ul>
						</div>
						{/* Menu Widget (Category) */}
						<div className="widget ltn__menu-widget ltn__menu-widget-2--- ltn__menu-widget-2-color-2---">
						<h4 className="ltn__widget-title ltn__widget-title-border-2">Top Categories</h4>
						<ul className="go-top">
							<li><Link to="/blog-grid">Apartments <span>(26)</span></Link></li>
							<li><Link to="/blog-grid">Picture Stodio <span>(30)</span></Link></li>
							<li><Link to="/blog-grid">Office  <span>(71)</span></Link></li>
							<li><Link to="/blog-grid">Luxary Vilas <span>(56)</span></Link></li>
							<li><Link to="/blog-grid">Duplex House <span>(60)</span></Link></li>
						</ul>
						</div>
						{/* Popular Product Widget */}
						<div className="widget ltn__popular-product-widget">       
						<h4 className="ltn__widget-title ltn__widget-title-border-2">Popular Properties</h4>                     
						<div className="row ltn__popular-product-widget-active slick-arrow-1">
							{/* ltn__product-item */}
							<div className="col-12">
							<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
								<div className="product-img go-top">
								<Link to="/shop"><img src={publicUrl+"assets/img/product-3/6.jpg"} alt="#" /></Link>
								<div className="real-estate-agent">
									<div className="agent-img">
									<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
									</div>
								</div>
								</div>
								<div className="product-info">
								<div className="product-price">
									<span>$349,00<label>/Month</label></span>
								</div>
								<h2 className="product-title"><Link to="/shop">New Apartment Nice View</Link></h2>
								<div className="product-img-location">
									<ul>
									<li>
										<Link to="/shop"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
									</li>
									</ul>
								</div>
								<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
									<li><span>3 </span>
									Bedrooms
									</li>
									<li><span>2 </span>
									Bathrooms
									</li>
									<li><span>3450 </span>
									square Ft
									</li>
								</ul>
								</div>
							</div>
							</div>
							{/* ltn__product-item */}
							<div className="col-12">
							<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
								<div className="product-img">
								<a href="product-details.html"><img src={publicUrl+"assets/img/product-3/4.jpg" }alt="#" /></a>
								<div className="real-estate-agent">
									<div className="agent-img">
									<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
									</div>
								</div>
								</div>
								<div className="product-info">
								<div className="product-price">
									<span>$349,00<label>/Month</label></span>
								</div>
								<h2 className="product-title"><a href="product-details.html">New Apartment Nice View</a></h2>
								<div className="product-img-location">
									<ul>
									<li>
										<a href="product-details.html"><i className="flaticon-pin" /> Belmont Gardens, Chicago</a>
									</li>
									</ul>
								</div>
								<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
									<li><span>3 </span>
									Bedrooms
									</li>
									<li><span>2 </span>
									Bathrooms
									</li>
									<li><span>3450 </span>
									square Ft
									</li>
								</ul>
								</div>
							</div>
							</div>
							{/* ltn__product-item */}
							<div className="col-12">
							<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
								<div className="product-img">
								<a href="product-details.html"><img src={publicUrl+"assets/img/product-3/5.jpg"} alt="#" /></a>
								<div className="real-estate-agent">
									<div className="agent-img">
									<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg" }alt="#" /></Link>
									</div>
								</div>
								</div>
								<div className="product-info">
								<div className="product-price">
									<span>$349,00<label>/Month</label></span>
								</div>
								<h2 className="product-title"><a href="product-details.html">New Apartment Nice View</a></h2>
								<div className="product-img-location">
									<ul>
									<li>
										<a href="product-details.html"><i className="flaticon-pin" /> Belmont Gardens, Chicago</a>
									</li>
									</ul>
								</div>
								<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
									<li><span>3 </span>
									Bedrooms
									</li>
									<li><span>2 </span>
									Bathrooms
									</li>
									<li><span>3450 </span>
									square Ft
									</li>
								</ul>
								</div>
							</div>
							</div>
							{/*  */}
						</div>
						</div>
						
						{/* Social Media Widget */}
						<div className="widget ltn__social-media-widget">
						<h4 className="ltn__widget-title ltn__widget-title-border-2">Follow us</h4>
						<div className="ltn__social-media-2">
							<ul>
							<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
							<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
							<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
							<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
							</ul>
						</div>
						</div>
						{/* Tagcloud Widget */}
						<div className="widget ltn__tagcloud-widget go-top">
						<h4 className="ltn__widget-title ltn__widget-title-border-2">Popular Tags</h4>
						<ul>
							<li><Link to="/blog-grid">Popular</Link></li>
							<li><Link to="/blog-grid">desgin</Link></li>
							<li><Link to="/blog-grid">ux</Link></li>
							<li><Link to="/blog-grid">usability</Link></li>
							<li><Link to="/blog-grid">develop</Link></li>
							<li><Link to="/blog-grid">icon</Link></li>
							<li><Link to="/blog-grid">Car</Link></li>
							<li><Link to="/blog-grid">Service</Link></li>
							<li><Link to="/blog-grid">Repairs</Link></li>
							<li><Link to="/blog-grid">Auto Parts</Link></li>
							<li><Link to="/blog-grid">Oil</Link></li>
							<li><Link to="/blog-grid">Dealer</Link></li>
							<li><Link to="/blog-grid">Oil Change</Link></li>
							<li><Link to="/blog-grid">Body Color</Link></li>
						</ul>
						</div>
						{/* Banner Widget */}
						<div className="widget ltn__banner-widget d-none go-top">
						<Link to="/shop"><img src={publicUrl+"assets/img/banner/2.jpg"} alt="#" /></Link>
						</div>
					</aside>
					</div>
				</div>
				</div>
				
			</div>
}

function textFormat(string){
	return string?.replace('_', ' ')
}

export default PropertyDetails