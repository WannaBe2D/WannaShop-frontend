import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Image, Form, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';


function Basket() {
    const history = useHistory()
    const[items, setItems] = useState({})

    const token = localStorage.getItem("Token")
    const config = {
        headers: { Authorization: `Token ${token}` }
    };

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get('http://localhost:8000/api/basket/',
            config
            )
            setItems(request.data)
            return request
        }
        fetchData()
    }, [])

    const handleCheckout = () => {
        axios.get('http://localhost:8000/api/add_item_to_order/',
        config
        ).then((response) => {
            history.push("/checkout")
        })
    }


    let link = 'http://127.0.0.1:8000'
    if(items.products){
        const mda = items.products.map((prod, i) => (
            <Container key={i} className="d-flex mt-3">
                    <Image src={link + prod.image[0]} width="100px" rounded />
                    <Container className="d-flex justify-content-between">
                        <div>
                            <p>{prod.name}</p>
                            <div className="mt-4">
                                <Container className="d-flex">
                                    <button className="mr-3" style={{border: "none",background: "none"}}>
                                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M13 27C20.1797 27 26 20.9558 26 13.5C26 6.04416 20.1797 0 13 0C5.8203 0 0 6.04416 0 13.5C0 20.9558 5.8203 27 13 27Z" fill="#F0F0F5"/>
                                        <rect x="7.37195" y="14.4" width="1.8" height="10.8411" rx="0.9" transform="rotate(-90 7.37195 14.4)" fill="black"/>
                                        </svg>
                                    </button>
                                    <p className="mt-3">N</p>
                                    <button className="ml-3" style={{border: "none",background: "none"}}>
                                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.9813 27C21.161 27 26.9813 20.9558 26.9813 13.5C26.9813 6.04416 21.161 0 13.9813 0C6.80162 0 0.981323 6.04416 0.981323 13.5C0.981323 20.9558 6.80162 27 13.9813 27Z" fill="#F0F0F5"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.7738 19.125C14.2528 19.125 14.6411 18.7367 14.6411 18.2577V14.3182H18.3762C18.8281 14.3182 19.1944 13.9519 19.1944 13.5C19.1944 13.0481 18.8281 12.6818 18.3762 12.6818H14.6411V8.74229C14.6411 8.2633 14.2528 7.875 13.7738 7.875C13.2948 7.875 12.9065 8.2633 12.9065 8.74229V12.6818H9.17145C8.71958 12.6818 8.35327 13.0481 8.35327 13.5C8.35327 13.9519 8.71958 14.3182 9.17145 14.3182H12.9065V18.2577C12.9065 18.7367 13.2948 19.125 13.7738 19.125Z" fill="black"/>
                                        </svg>
                                    </button>
                                </Container>
                            </div>
                        </div>
                        <p className="font-weight-bold">{prod.price}</p>
                    </Container>
                </Container>
        ))

        return(
            <div>
            <h3 className="m-4" style={{borderBottom: "1px solid #E6E6EB", paddingBottom: "5px"}}>Your card</h3>
            <Container>
                {mda}
                <Form className="d-flex mt-5">
                    <Form.Group controlId="forBasicPromocode">
                        <Form.Control  style={{background: "#E6E6EB"}} type="text" placeholder="Add promocode" />
                    </Form.Group>
                    <Button className="w-50 h-50 ml-2" type="submit" style={{background: "none", color: "black"}}>
                        Apply
                    </Button>
                </Form>

                <Container className="d-flex justify-content-between pt-2" style={{borderTop: "1px solid #E6E6EB"}}>
                    <p>Text</p>
                    <p>price</p>
                </Container>
                <Container className="d-flex justify-content-between pt-2" style={{borderTop: "1px solid #E6E6EB"}}>
                    <p>Text</p>
                    <p>price</p>
                </Container>

                <Button onClick={handleCheckout} className="w-50 mt-5 mb-5" style={{background: "#595CFF", borderColor: "#595CFF"}}>Checkout</Button>
            </Container>
        </div>
        )
    }

    
    return(
        <div>
            <h3 className="m-4" style={{borderBottom: "1px solid #E6E6EB", paddingBottom: "5px"}}>Your card</h3>
            <Container>
                <Form className="d-flex mt-5">
                    <Form.Group controlId="forBasicPromocode">
                        <Form.Control  style={{background: "#E6E6EB"}} type="text" placeholder="Add promocode" />
                    </Form.Group>
                    <Button className="w-50 h-50 ml-2" type="submit" style={{background: "none", color: "black"}}>
                        Apply
                    </Button>
                </Form>

                <Container className="d-flex justify-content-between pt-2" style={{borderTop: "1px solid #E6E6EB"}}>
                    <p>Text</p>
                    <p>price</p>
                </Container>
                <Container className="d-flex justify-content-between pt-2" style={{borderTop: "1px solid #E6E6EB"}}>
                    <p>Text</p>
                    <p>price</p>
                </Container>

                <Button className="w-50 mt-5" style={{background: "#595CFF", borderColor: "#595CFF"}}>Checkout</Button>
            </Container>
        </div>
    )
}

export default Basket;