import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Token from '../Auth/Token';

function Basket() {

    useEffect(() => {
        if(!localStorage.getItem("Token")){
            <Token />
        }else{
            const mda = localStorage.getItem("Token")

            axios({
                method: "GET",
                url: `http://127.0.0.1:8000/api/basket/`,
                headers: {
                    "Authorization" : `Token ${mda}`
                }
            }).then(response => {
                console.log(response.data)
            })
        }   
    }, [])

    return(
        <div>

        </div>
    )
}

export default Basket;