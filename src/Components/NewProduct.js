import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Image, Container, Button, Carousel, CardGroup, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function NewProduct() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost:8000/api/products/`
        }).then(response => {
            setProducts(response.data.reverse().slice(0,4))
        })
    }, [])

    let link = 'http://127.0.0.1:8000'
    const productJSX = products.map((prod, i) =>(
        <Card key={prod.id} className="border-0 m-3" style={{cursor: 'pointer'}}>
            <Card.Img src={link + prod.image[0]} />
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Text>${prod.price}</Card.Text>
                <Link to={{pathname:`/products/${prod.id}/`}}>Detail</Link>
            </Card.Body>
        </Card>
    ))

    return(
        <div>
            <CardGroup>
                {productJSX}
            </CardGroup>
        </div>
    )
}

export default NewProduct;