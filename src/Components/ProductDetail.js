import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Image, Container, Button, Carousel, CardGroup, Card } from 'react-bootstrap';
import NewProduct from './NewProduct';


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
    if(product.image){
        return(
            <Container>
                <div style={{display:"flex"}}>
                    <Carousel fade className="w-50">
                        <Carousel.Item>
                            <img className="d-block" style={{width:"568px", height:"568px"}}
                                src={link + product.image[0]}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block"  style={{width:"568px", height:"568px"}}
                                src={link + product.image[1]}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block"  style={{width:"568px", height:"568px"}}
                                src={link + product.image[2]}
                            />
                        </Carousel.Item>
                    </Carousel>

                    <div className="m-5">
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <Button variant="dark" className="rounded-0 btn-lg">ADD TO CARD</Button>
                    </div>

                </div>
                <div className="m-5">
                    <p>New Arrivals</p>
                    <NewProduct />
                </div>
            </Container>
        )
    }
    return(
        <div></div>
    )

}

export default ProductDetail;