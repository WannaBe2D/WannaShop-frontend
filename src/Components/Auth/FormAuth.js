import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Token from './Token';

function FormAuth(){

    return(
        <Container>
                <Form>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username"/>
                    </Form.Group>
    
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
    
                    <Button type="submit">Submit</Button>
                </Form>

            </Container>
    )
}

export default FormAuth;