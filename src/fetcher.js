import config from './config.json'


//test Route
const testRoute = async () => {
    var res = await fetch(`http://${config.server_host}/test`, {
        method: 'GET',
    })
    return res.json()
}

//QUIZ
//Route 1: Get counties /counties
const getCounties = async () => {
    var res = await fetch(`http://${config.server_host}/counties`, {
        method: 'GET',
    })
    return res.json()
}


// ********************************************
//            SEARCH PAGES ROUTES
// ********************************************

//Route 2: Get State List
//Description: Get list of all states and their cities 
//Value: -
//Optional Parameter
//Returns List of State Name & State Code and their Cities


//Route 3: Get property List
//Description: Make API call to RealEstate API
//Value: offset, limit, state_code, city
//Optional Parameter: price_max, min_price
//Returns List of Property Details


// ********************************************
//            LISTINGS PAGES ROUTES
// ********************************************

//Route 4: Get Property List Based on Filter
//Description: Get Fresh List of Properties based on API change
//Value: offset, limit, state_code, city
//Optional Parameter: price_max, min_price, beds_min, beds_max, baths_min, baths_max, property_type
//Returns List of Property Details

//Route 5: Fresh Api call based on Page No.
//Description: Get Fresh List of Properties based on Page Number Offset
//Value: offset, limit, state_code, city
//Optional Parameter: price_max, min_price, beds_min, beds_max, baths_min, baths_max, property_type
//Returns List of Property Details


// ********************************************
//            LISTINGS DETAILS ROUTES
// ********************************************
//ROUTE 6: CALL API for Details of Listings
//Description: Get Details of a Property
//Value: property_id
//Returns Details of a Property


// ********************************************
//            QUIZ ROUTES
// ********************************************
//ROUTE 6: Call to Server for Prosperity Index
//Value: Prosperity Index Array
//Return: List of counties


export default testRoute