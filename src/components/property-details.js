import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Navbar from "./global-components/navbar";
import ProductSlider from "./components/PhotoSlider";
import ProductDetails from "./property-components/property-expanded";
import Footer from "./global-components/footer";

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
        'X-RapidAPI-Key': '3f515e3d43mshd23209238a487dep165accjsn056995b24ad3'
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
      <ProductDetails property={data}/>
      <div class='container'><ProductSlider photos={data.photos}/></div>
      <Footer />
    </div>
  );
};

export default PropertyDetails;
