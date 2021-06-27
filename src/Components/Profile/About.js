import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';


function About() {

    const history = useHistory()

    const[meInfo, setInfo] = useState({})
    const token = localStorage.getItem("Token")
    const config = {
        headers: { Authorization: `Token ${token}` }
    };

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/auth/users/me',
        config
        ).then((response) => {
            setInfo(response.data)
        }).catch((error) =>{
            history.push("/login")
        })
    })

    const logout = () => {
        axios.get('http://127.0.0.1:8000/api/logout/',
        config
        ).then((response) => {
            history.push("/login")
        })
    }

    return(
        <div>
            <h2 className="m-4">My Account</h2>
            <h2>Username: {meInfo.username}</h2>
            <h3>Email: {meInfo.email}</h3>
            <button onClick={logout}>logout</button>
        </div>
    )
}


export default About;