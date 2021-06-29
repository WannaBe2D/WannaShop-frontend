import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AllProductsW() {
//<Link to={{pathname:`/products/${prod.id}/`}}>Detail</Link>
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost:8000/api/products/`
        }).then(response => {
            setProducts(response.data)
            console.log(response.data)
        })
    }, [])

    let link = 'http://127.0.0.1:8000'
    console.log(products)
    if(products.length == 0){
        return <div>loading...</div>
    }
    const productJSX = products.map((prod, i) =>(
        prod.sex == "W" ?
        <Card key={i} className="border-0 col-lg-3 col-md-4 col-sm-5 showMyCard">
            <Card.Img src={link + prod.image[0]} />
            <div className="myButmda">
                <Link to={{pathname:`/products/${prod.id}/`}}>
                    <Button className="m-2"  size="lg" variant="light" style={{width:"180px",  fontSize: '14px'}}>DETAIL</Button>
                </Link>
            </div>
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Text>${prod.price}</Card.Text>
            </Card.Body>
        </Card>
        :
        <div key={i}></div>
    ))

    return (
        <Container>
            <Row className="mt-4">
                {productJSX}
            </Row>
        </Container>
    )
}

export default AllProductsW;