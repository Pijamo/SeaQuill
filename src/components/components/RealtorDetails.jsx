import React from "react";
import { Link } from "react-router-dom";

const Realtor = ( { realtor } ) => (
    <div className="widget ltn__author-widget">
        <div className="ltn__author-widget-inner text-center">
            <img src={realtor?.photo?.href} alt="Image" />
            <h5>{realtor?.name}</h5>
            <h6>{realtor?.office_name}</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio, eligendi suscipit reprehenderit atque.</p>
            <div className="ltn__social-media">
                <ul>
                    <li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
                    <li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
                    <li><a href="#" title="Youtube"><i className="fab fa-youtube" /></a></li>
                </ul>
            </div>
        </div>
    </div>
);


export default Realtor