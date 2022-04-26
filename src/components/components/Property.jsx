import React from "react";
import { Link } from "react-router-dom";

import DefaultImage from '../../assets/img/sample_house.jpg'

const Property = ({
  property: { primary_photo, property_id, list_price, description, location, status},
}) => (
    <div className="col-xl-6 col-sm-6 col-12">
    <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
        <div className="product-img go-top">
            <Link to={`/property/${property_id}`}><img src={primary_photo == null ? DefaultImage : primary_photo.href } alt="#" /></Link>
          
        </div>
        <div className="product-info">
            <div className="product-badge">
                <ul>
                    <li className="sale-badge">{textFormat(status)}</li>
                </ul>
            </div>
            <h2 className="product-title go-top">{property_id}</h2>
            <div className="product-img-location go-top">
                <ul>
                    <li>
                        <i className="flaticon-pin" /> {`${location.address.postal_code}`}, {`${location.address.state}, ${location.address.city}`}
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
            <div className="product-price">
                <span>{formatter.format(list_price)}</span>
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

export default Property;
