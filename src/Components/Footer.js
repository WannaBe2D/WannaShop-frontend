import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class Footer extends Component {
    render() { 
        return ( 
            <div style={{backgroundColor: '#212A2F', padding: '10px'}}>
                <Form inline>
                    <Form.Group className="m-2">
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                    <Button variant="dark">SEND</Button>
                </Form>
                <p className="text-center mb-0" style={{color: "white"}}>© 2021 Allbirds, Inc. All Rights Reserved.Terms, Privacy & Accessibility</p>
            </div>
         );
    }
}
 
export default Footer;