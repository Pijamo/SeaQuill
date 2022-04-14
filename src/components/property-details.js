import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import ProductSlider from "./property-components/property-slider";
import ProductDetails from "./property-components/property-expanded";
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
