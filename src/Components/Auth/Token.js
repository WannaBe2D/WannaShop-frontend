import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Token(props) {
    //d63facedbb15f17d71194af6b59df676a5f99a78
    console.log("LOG")

    const[token, setToken] = useState({})

    useEffect(() => {
        axios({
            method: "POST",
            url: `http://127.0.0.1:8000/auth/token`,
            data: {
                "username": "Testuser",
                "password": "terarria"
            }
        }).then(response => {
            setToken(response.data)
            localStorage.setItem("Token",response.data.token)
        })   
    }, [])

    return(
        <div>
            
        </div>
    )
}

export default Token;