import React, { Component } from 'react';
import { CardGroup, Container, Card, Image, Button } from 'react-bootstrap';

import newArImg1 from '../Assets/neArImg1.png' 
import newArImg2 from '../Assets/neArImg2.png' 
import newArImg3 from '../Assets/neArImg3.png' 

class NewArrivals extends Component {
    render() { 
        return ( 
            <div>
                <Container className="mt-5">
                    <h3>New Arrivals</h3>
                    <CardGroup>
                        <Card className="border-0 m-3" style={{cursor: 'pointer'}}>
                            <Card.Img src={newArImg1} />
                            <Card.Body>
                                <Card.Title>Women's Tree Dasher</Card.Title>
                                <Card.Text>Limited Edition Color, Gaia</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="border-0 m-3" style={{cursor: 'pointer'}}>
                            <Card.Img src={newArImg2} />
                            <Card.Body>
                                <Card.Title>Men's Tree Dasher</Card.Title>
                                <Card.Text>Limited Edition Color, Terra</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="border-0 m-3" style={{cursor: 'pointer'}}>
                            <Card.Img src={newArImg3} />
                            <Card.Body>
                                <Card.Title>Women's Tree Runner</Card.Title>
                                <Card.Text>Limited Edition Color, Aspen</Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
         );
    }
}
 
export default NewArrivals;