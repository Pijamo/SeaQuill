import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import ProductSlider from "./shop-components/product-slider-v1";
import ProductDetails from "./shop-components/property-expanded";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";
import propertyDetails from "../assets/json/property.json";

const PropertyDetails = () => {
  const params = useParams();
  const userId = params.id;

  var data = propertyDetails.data.property_detail

  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Product Details" customclass="mb-0" />
      <ProductSlider photos={data.photos}/>
      <ProductDetails property={data}/>
      <Footer />
    </div>
  );
};

export default PropertyDetails;
