import React from 'react'
import Property from './Property';
import PropertyList from './PropertyList'

const Posts = ({posts, loading }) => {

	if (loading) {
        return <h2> Loading... </h2>
    }

    return (
      <div className="tab-content">
        <div className="tab-pane fade active show" id="liton_product_grid">
          <div className="ltn__product-tab-content-inner ltn__product-grid-view">
            <div className="row">
              
              {/* Posts */}
              {posts.map((property) => (
                <Property property={property} key={property.property_id} />
              ))}
              {/*  */}
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="liton_product_list">
          <div className="ltn__product-tab-content-inner ltn__product-list-view">
            <div className="row">
              
              {posts.map((property) => (
                <PropertyList property={property} key={property.property_id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );

}

export default Posts