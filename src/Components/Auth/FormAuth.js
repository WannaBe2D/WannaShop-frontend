import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

async function SetTokenn(credentials) {
    const data = { username: credentials.username, password: credentials.password };
    axios.post('http://127.0.0.1:8000/auth/token', data)
        .then(response => localStorage.setItem("Token", response.data.token))
        .catch((error) => {
            if (error.response) {
                console.log(error.response.status);
            }
        })
}


function FormAuth() {

    const[username, setUsername] = useState()
    const[password, setPassword] = useState()

    const handleSubmit = async e => {
        e.preventDefault()
        const token = await SetTokenn({
            username,
            password
        })
    }

    return(
        <Container>
                <div className="m-5">
                    <h2>Log into Squarespace</h2>
                    <p style={{color: "#D4D4CE"}}>or <a href="#" style={{borderBottom: "1px solid #D4D4CE", color:"#D4D4CE"}}>Create Account</a></p>
                </div>

                <Form style={{width:"300px", margin: "0 auto"}} onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Control onChange={e => setUsername(e.target.value)} style={{borderRadius: "0", borderTop: "none", borderLeft: "none", borderRight: "none"}} type="text" placeholder="Email Address"/>
                    </Form.Group>
    
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control onChange={e => setPassword(e.target.value)} style={{borderRadius: "0", borderTop: "none", borderLeft: "none", borderRight: "none"}} type="password" placeholder="Password" />
                    </Form.Group>
    
                    <Button className="mt-3" style={{width:"300px"}} variant="secondary" type="submit">Log in</Button>
                </Form>
            </Container>
    )
}

export default FormAuth;