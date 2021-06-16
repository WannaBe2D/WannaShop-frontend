import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ListGroup, Container, Col } from 'react-bootstrap';

function Category(){

    const [category, setCategory] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost:8000/api/categories/`
        }).then(response => {
            setCategory(response.data)
        })
    }, [])

    return(
        <Container>
            <Col md="4" className="m-4">
                <ListGroup horizontal>
                    {category.map(element => (
                        <ListGroup.Item key={element.id} className="border-0">
                            <Link to={{pathname:`/category/${element.id}/`}} style={{color: "black"}}>{element.name}</Link>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
        </Container>
    )
}

export default Category;