import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CategoryList({ match }) {

    const [category, setCategory] = useState({})
    const id = match.params.id
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost:8000/api/categories/${id}/`,
        }).then(response => {
            setCategory(response.data)
            setProducts(response.data.products)
        })
    }, [id])

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

    return(
        <Container>
            <h3>{category.name}</h3>
            <Row className="mt-4">
                {productJSX}
            </Row>
        </Container>
    )
}

export default CategoryList;