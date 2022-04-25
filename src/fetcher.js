import config from './config.json'



// ********************************************
//            QUIZ ROUTES
// ********************************************
//Route 1: Get counties /counties
const getCounties = async (page, pagesize, zip, education, freedom, safety, social, business, economic, infrastructure, governance, health, living, environment) => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/counties?page=${page}&pagesize=${pagesize}&zip=${zip}&education=${education}&freedom=${freedom}&safety=${safety}&social=${social}&business=${business}&economic=${economic}&infrastructure=${infrastructure}&governance=${governance}&health=${health}&living=${living}&environment=${environment}`, {
        method: 'GET',
    })
    return res.json()
}

// Route 2: Returns list of city in selected county
const getCities = async (page, pagesize, popLower, popUpper, countyCode) => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/cities?page=${page}&pagesize=${pagesize}&county=${countyCode}&popLower=${popLower}&popUpper=${popUpper}`, {
        method: 'GET',
    })
    return res.json()
}

//Route 3: Returns climate information for the selected county
const getClimate = async (countyCode) => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/climate?county=${countyCode}`, {
        method: 'GET',
    })
    return res.json()
}

//Route 4: Returns job information for the selected county
const getJobs = async (page, pagesize, jobTitle, countyCode) => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/jobs?page=${page}&pagesize=${pagesize}&keyword=${jobTitle}&county=${countyCode}`, {
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
//            USER ROUTES
// ********************************************
const getUsers = async (email, password) => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/users?email=${email}&password=${password}`, {
        method: 'GET',
    })
    return res.json()
}




export {
    getUsers,
    getCounties,
    getCities,
    getClimate,
    getJobs}