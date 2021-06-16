import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function ProductDetail({ match }) {
    const [product, setProduct] = useState({})
    const id = match.params.id

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost:8000/api/products/${id}/`,
        }).then(response => {
            setProduct(response.data)
        })
    }, [id])

    let link = 'http://127.0.0.1:8000'
    if(product.length == 0){
        return <div>loading...</div>
    }

    return(
        <div>
           <h3>{product.name}</h3>
           <p>{product.sex}</p>
        </div>
    )

}

export default ProductDetail;