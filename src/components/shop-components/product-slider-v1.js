import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ProductSliderV1 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__img-slider-area mb-90">
				<div className="container-fluid">
				<div className="row ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
					{this.props.photos.map((photo) =>
					<div className="col-lg-12">
						<div className="ltn__img-slide-item-4">
							<a href={photo.href} data-rel="lightcase:myCollection">
							<img src={photo.href} alt="Image" />
							</a>
						</div>
					</div>
					)}
				</div>
				</div>
			</div>
        }
}

export default ProductSliderV1