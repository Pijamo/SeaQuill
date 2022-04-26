import React,{useState, useEffect} from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Login from './section-components/login';
import Footer from './global-components/footer';
import {getUser, addUser} from '../fetcher' 

const LoginV1 = () => {
    // Login to account
    let [accountInfo, setAccountInfo] = useState(false)
    
    let [username, setUserName] = useState()
    let [password, setPassword] = useState()

    useEffect(()=> {
        getUser('test@example.com', 'abc23') 
        .then(data=>setAccountInfo(data["results"]))
    }, [])

    //Create new account
    let [createdAccount, setCreated] = useState(false)
    
    useEffect(()=> {
        addUser('test6@example.com', 'abc123', 'Alex', 'V', 'male', null, null) 
        .then(data=>setCreated(data["results"]))
    }, [])



    


    return <div>
        <Navbar />
        <PageHeader headertitle="Account" subheader="Login" />
        <Login />
        {console.log(accountInfo[0])}
        {console.log(createdAccount)}
        <Footer />
    </div>
}

export default LoginV1

