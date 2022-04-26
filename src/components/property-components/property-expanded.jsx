import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const PropertyDetails = ( { property } ) => {

    let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__shop-details-area pb-10">
			
				<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-12">
					<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
						<div className="ltn__blog-meta">
						<ul>
						
							<li className="ltn__blog-category">
							<Link className="bg-orange" >{textFormat(property.prop_common?.status)}</Link>
							</li>
							
						</ul>
						</div>
						<h1> {property.address?.line}</h1>
				
                        <i className="flaticon-pin" />  {property.address?.city}, {property.address?.state}   {property.address?.postal_code}
                   
						
						<h4 className="title-2">Description</h4>
						<p>{property.prop_common?.description}</p>
						<h4 className="title-2">Property Details</h4>  
						<div className="property-detail-info-list section-bg-1 clearfix mb-60">                          
						<ul>
							{/* <li><label>Property ID:</label> <span>HZ29</span></li> */}
							
							{property.prop_common?.sqft && 
							<li><label>Home Area: </label> <span>{property.prop_common.sqft.toLocaleString()} sqft</span></li>
							}

							{property.prop_common?.stories && 
							<li><label>Stories:</label> <span>{property.prop_common.stories}</span></li>
							}

							{property.prop_common?.rooms && 
							<li><label>Rooms:</label> <span>{property.prop_common.rooms}</span></li>
							}

							

							{property.prop_common?.bed && 
							<li><label>Beds:</label> <span>{property.prop_common.bed}</span></li>
							}

							{property.prop_common?.bath && 
							<li><label>Baths:</label> <span>{property.prop_common.bath}</span></li>
							}

							

							
							
						</ul>
						<ul>
							{/* <li><label>Lot Area:</label> <span>HZ29 </span></li> */}
							{property.prop_common?.garage && 
							<li><label>Garage:</label> <span>{property.prop_common.garage}</span></li>
							}
							{property.prop_common?.lot_sqft && 
							<li><label>Lot dimensions:</label> <span>{property.prop_common.lot_sqft.toLocaleString()} sqft</span></li>
							}

							{property.prop_common?.year_built && 
							<li><label>Year built:</label> <span>{property.prop_common.year_built}</span></li>
							}

							
							{property.prop_common?.price && 
							<li><label>Price:</label> <span>${property.prop_common.price.toLocaleString()}</span></li>
							}
							
							
						</ul>
						</div>
						{/* <h4 className="title-2">Facts and Features</h4>
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
						</div> */}
						<h4 className="title-2">Location</h4>
						<div className="property-details-google-map mb-60">
						<iframe src={`https://maps.google.com/maps?q=${property.address?.location.lat},${property.address?.location.lon}&hl=en&z=14&amp&output=embed`} width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
						</div>
						
						
					</div>
					</div>
					
				</div>
				</div>
				
			</div>
}

function textFormat(string){
	return string?.replace('_', ' ')
}

export default PropertyDetails