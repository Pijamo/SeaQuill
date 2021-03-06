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

//Route 1: Get prosperity scores for a particular county
const getScores = async (county_id) => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/prosperity?county=${county_id}`, {
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
//            USER ROUTES
// ********************************************
const getUser = async (email, password) => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/users?email=${email}&password=${password}`, {
        method: 'GET',
    })
    return res.json()
}

const addUser = async (email, password, firstName, lastName, gender, dob, zip) => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/users?email=${email}&password=${password}&firstName=${firstName}&lastName=${lastName}&gender=${gender}&dob=${dob}&zip=${zip}`, {
        method: 'POST',
    })
    return res.json()
}


// ********************************************
//            SEARCH ROUTES
// ********************************************

const getCityState = async () => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/cityState`, {
        method: 'GET',
    })

    return res.json()
}

export {
    getUser,
    addUser,
    getCounties,
    getScores,
    getCities,
    getClimate,
    getJobs,
    getCityState
}