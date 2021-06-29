import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Image, Button } from 'react-bootstrap';
import cardImage from '/home/andrei/www/wannaShopFrontend/wanna-frontend/src/Assets/Block.png'
import { Link } from 'react-router-dom';


function Checkout() {
    const[orders, setOrders] = useState([])

    const token = localStorage.getItem("Token")
    const config = {
        headers: { Authorization: `Token ${token}` }
    }

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get('http://localhost:8000/api/order/',
            config
            )
            setOrders(request.data)
            return request
        }
        fetchData()
    }, [])

    console.log(orders)
    let link = 'http://127.0.0.1:8000'
    if(orders){
        const ordersJSX = orders.map((order, i) => (
            <Container key={i} className="mt-3 d-flex justify-content-between">
                <Image src={link + order.items[0].image[0]} width="100px" />
                <p>Count items: {order.items.length}</p>
                <Link to={{pathname:`/checkout/${order.id}/`}}>
                    <Button style={{background: "none", color: "black"}}>Buy</Button>
                </Link>
            </Container>
        ))

        return(
            <div>
                {ordersJSX}
            </div>
        )

    }
    return (
        <div></div>
    )
}


export default Checkout;