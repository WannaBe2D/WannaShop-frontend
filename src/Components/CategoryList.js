import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Card } from 'react-bootstrap';

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
        console.log("MDA")
    }
    const productJSX = products.map((prod, i) =>(
        <Card key={i} className="border-0 col-lg-3 col-md-4 col-sm-5">
            <Card.Img src={link + prod.image[0]} />
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Text>${prod.price}</Card.Text>
            </Card.Body>
        </Card>
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