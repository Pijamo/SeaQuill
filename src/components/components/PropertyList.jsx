import React from "react";
import { Link } from "react-router-dom";
import DefaultImage from '../../assets/img/sample_house.jpg'

const PropertyList = ({
    property: { primary_photo, property_id, list_price, description, location, status},
}) => (
    <div className="col-lg-12">
        <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
            <div className="product-img go-top">
                <Link to="/product-details"><img src={primary_photo == null ? DefaultImage : primary_photo.href } alt="#" /></Link>
            </div>
            <div className="product-info">
                <div className="product-badge-price">
                    <div className="product-badge">
                        <ul>
                            <li className="sale-badg">{textFormat(status)}</li>
                        </ul>
                    </div>
                    <div className="product-price">
                        <span>{formatter.format(list_price)}</span>
                    </div>
                </div>
                <h2 className="product-title go-top"><Link to="/product-details">Some Name To Decide</Link></h2>
                <div className="product-img-location go-top">
                    <ul>
                        <li>
                            <Link to="/contact"><i className="flaticon-pin" /> {`${location.address.postal_code}`}, {`${location.address.state}, ${location.address.city}`}</Link>
                        </li>
                    </ul>
                </div>
                <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                    <li><span>{description.beds} </span>
                        Bed
                    </li>
                    <li><span>{description.baths} </span>
                        Bath
                    </li>
                    <li><span>{description.sqft} </span>
                        Square Ft
                    </li>
                </ul>
            </div>
            <div className="product-info-bottom">
                <div className="real-estate-agent">
                    <div className="agent-img">
                        <Link to="/shop"><img src={process.env.PUBLIC_URL + "/assets/img/blog/author.jpg"} alt="#" /></Link>
                    </div>
                    <div className="agent-brief">
                        <h6><Link to="/team-details">William Seklo</Link></h6>
                        <small>Estate Agents</small>
                    </div>
                </div>
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
                        <li className="go-top">
                            <Link to="/product-details" title="Product Details">
                                <i className="flaticon-add" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

function textFormat(text){
    return text.replace('_', ' ');
}

export default PropertyList;
