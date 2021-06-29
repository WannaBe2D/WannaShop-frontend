import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import '/home/andrei/www/wannaShopFrontend/wanna-frontend/src/App.css';


function CheckoutDetail({ match }) {
    const[order, setOrder] = useState({})
    const id = match.params.id
    console.log(id)

    const token = localStorage.getItem("Token")
    const config = {
        headers: { Authorization: `Token ${token}` }
    }

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(`http://localhost:8000/api/order/${id}/`,
            config
            )
            setOrder(request.data)
            return request
        }
        fetchData()
    }, [id])

    if(order.items){
        return(
            <Container>
                <h2 className="mt-3">Checkout</h2>
                <Container className="mt-3">
                    <p>Delivery method</p>
                    <Form>
                    
                        <Form.Group >
                            <Form.Check
                            type="radio"
                            label="STANDARD DELIVERY"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            style={{border: "1px solid #F0F0F5"}}
                            className="p-2"
                            />
                            <Form.Check
                            type="radio"
                            label="FROM STORE"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            style={{border: "1px solid #F0F0F5"}}
                            className="mt-2 p-2"
                            />
                        </Form.Group>

                        <p className="mt-4">Delivery address</p>

                        <Container className="d-flex">
                            <Form.Control className="m-2" type="text" placeholder="First Name" />
                            <Form.Control className="m-2" type="text" placeholder="Last Name" />
                        </Container>
                        
                        <Form.Control className="mt-2" type="text" placeholder="Delivery address" />

                        <Button style={{background: "#595CFF"}} className="mt-5" type="submit">Payment</Button>
                    </Form>
                </Container>
            </Container>
        )
    }

    return(
        <div></div>
    )
}

export default CheckoutDetail;