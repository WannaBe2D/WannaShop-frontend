import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';


function FormReg() {
    const history = useHistory()

    const[email, setEmail] = useState()
    const[username, setUsername] = useState()
    const[password1, setPassword1] = useState()
    const[password2, setPassword2] = useState()

    const handleSubmit = async e => {
        e.preventDefault()

        if(password1 == password2 && String(username).length > 4){
            const data = {email: email, username: username, password: password1}
            await axios.post('http://127.0.0.1:8000/auth/users/', data)
            .then((response => {
                console.log(response.data)
                history.push("/login")
            }))
            .catch((error) => {
                console.log(error.message)
            })
        }
    }

    return(
        <Container>
                <div className="m-5">
                    <h2>Register into Squarespace</h2>
                    <p style={{color: "#D4D4CE"}}>or <a href="/login" style={{borderBottom: "1px solid #D4D4CE", color:"#D4D4CE"}}>Login in Account</a></p>
                </div>

                <Form onSubmit={handleSubmit} style={{width:"300px", margin: "0 auto"}}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control onChange={e => {setEmail(e.target.value)}} style={{borderRadius: "0", borderTop: "none", borderLeft: "none", borderRight: "none"}} type="email" placeholder="Email Address"/>
                    </Form.Group>
    
                    <Form.Group controlId="formBasicUsername">
                        <Form.Control onChange={e => {setUsername(e.target.value)}} style={{borderRadius: "0", borderTop: "none", borderLeft: "none", borderRight: "none"}} type="text" placeholder="Username"/>
                    </Form.Group>
    
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control onChange={e => {setPassword1(e.target.value)}} style={{borderRadius: "0", borderTop: "none", borderLeft: "none", borderRight: "none"}} type="password" placeholder="Password" />
                    </Form.Group>
    
                    <Form.Group controlId="formBasicPasswordRepeat">
                        <Form.Control onChange={e => {setPassword2(e.target.value)}} style={{borderRadius: "0", borderTop: "none", borderLeft: "none", borderRight: "none"}} type="password" placeholder="Repeat Password" />
                    </Form.Group>
    
                    <Button className="mt-3" style={{width:"300px"}} variant="secondary" type="submit">Sign up</Button>
                </Form>
            </Container>
    )
}


export default FormReg;