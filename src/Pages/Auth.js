import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import FormAuth from '../Components/Auth/FormAuth';

class Auth extends Component{
    render(){
        return (
            <div>
                <FormAuth />
            </div>
        )
    }
    
}

export default Auth;