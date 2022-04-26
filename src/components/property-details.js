import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import ProductSlider from "./components/PhotoSlider";
import ProductDetails from "./property-components/property-expanded";
import Footer from "./global-components/footer";
import propertyDetails from "../assets/json/property.json";
const axios = require("axios");

function PropertyDetails() {
  const params = useParams();
  const userId = params.id;
  const [ data, setData ] = useState('')
  const [ loading, setLoading ] = useState(false)
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

			axios.request(options).then(function (response){
				const res = {data: response.data.data.property_detail}
        console.log(res.data)
				setData(res.data);
				setLoading(false);
			}).catch(function (error) {
				console.log(error)
			})
    }

    const options = {
      method: 'GET',
      url: 'https://us-real-estate.p.rapidapi.com/v2/property-detail',
      params: {property_id: userId},
      headers: {
        'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com',
        'X-RapidAPI-Key': '5acc196857mshe4a6c20d2ae946cp1583d9jsnb9d98e8ac7ef'
      }
    }
    
    fetchData();
  }, []);

  if (loading) {
    return <h2> Loading... </h2>
  }

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
