import React, { Component } from 'react';
import { CardGroup, Container, Card, Image, Button } from 'react-bootstrap';

import shopCardImg1 from '../Assets/shopCardImg1.png'
import shopCardImg2 from '../Assets/shopCardImg2.png'
import shopCardImg3 from '../Assets/shopCardImg3.png'
import madeFromImg from '../Assets/madefromnature.png'

class ShopByCategory extends Component {
    render() { 
        return ( 
            <div>
                <Container className="mt-5">
                    <h3>Shop By Category</h3>
                    <CardGroup>
                        <Card className="border-0 m-3" style={{cursor: 'pointer'}}>
                            <Card.Img src={shopCardImg1} />
                            <Card.Body>
                                <Card.Text>Men's Shoes</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="border-0 m-3" style={{cursor: 'pointer'}}>
                            <Card.Img src={shopCardImg2} />
                            <Card.Body>
                                <Card.Text>Women's Shoes</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="border-0 m-3" style={{cursor: 'pointer'}}>
                            <Card.Img src={shopCardImg3} />
                            <Card.Body>
                                <Card.Text>Men's Apparel</Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>

                <Image className="mb-5" src={madeFromImg} style={{width: '100%'}}/>
                <h3 className="text-center">Made From Nature, For Nature</h3>
                <p className="text-center">We craft with planet-friendly natural materials, like merino wool and eucalyptus trees,<br></br> because they're our best chance for a sustainable future.</p>
                <div className="d-flex justify-content-center">
                    <Button className="m-3" variant="dark" style={{width: '384px', fontSize: '14px'}}>SEE NOW</Button>
                </div>
            </div>
         );
    }
}
 
export default ShopByCategory;