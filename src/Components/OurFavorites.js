import React, { Component } from 'react';
import { Tabs, Tab, Container, CardGroup, Card , Button, Image } from 'react-bootstrap';
import '../App.css';

import cardImg1 from '../Assets/cardImage1.png'
import cardImg2 from '../Assets/cardImage2.png'
import cardImg3 from '../Assets/cardImage3.png'
import shopCardImg1 from '../Assets/shopCardImg1.png'
import shopCardImg2 from '../Assets/shopCardImg2.png'
import shopCardImg3 from '../Assets/shopCardImg3.png'
import ourFavoritesImg from '../Assets/ourFavoritesImg.png'

class OurFavorites extends Component {
    render() { 
        const shoes = <span className="myTab">SHOES</span>
        const apparel = <span className="myTab">APPAREL</span>
        const basics = <span className="myTab">BASICS</span>

        return (  
            <div>
                <h3 className="text-center mb-4">Our Fovorites</h3>
                <Container className="mb-5">
                    <Tabs className="justify-content-md-center myTab" defaultActiveKey="shoes" id="uncontrolled-tab-example">
                        <Tab eventKey="shoes" title={shoes}>
                            <CardGroup>
                                <Card border="light" className="m-3 border-0 showMyCard">
                                    <Card.Img variant="top" src={cardImg1}/>
                                    <div className="myButmda">
                                        <Button className="m-2"  size="lg" variant="light" style={{width:"180px",  fontSize: '14px'}}>SHOP MEN</Button>
                                        <Button className="m-2" size="lg" variant="light" style={{width:"180px",  fontSize: '14px'}}>SHOP WOMEN</Button>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="myCard">Tree Dasher</Card.Title>
                                        <Card.Text>Daily Running Shoe</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card border="light" className="m-3 border-0 showMyCard">
                                    <Card.Img variant="top" src={cardImg2}/>
                                    <div className="myButmda">
                                        <Button className="m-2"  size="lg" variant="light" style={{width:"180px",  fontSize: '14px'}}>SHOP MEN</Button>
                                        <Button className="m-2" size="lg" variant="light" style={{width:"180px",  fontSize: '14px'}}>SHOP WOMEN</Button>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="myCard">Tree Runner</Card.Title>
                                        <Card.Text>Light and Breezy Sneaker</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card border="light" className="m-3 border-0 showMyCard" variant="lig">
                                    <Card.Img variant="top" src={cardImg3}/>
                                    <div className="myButmda">
                                        <Button className="m-2"  size="lg" variant="light" style={{width:"180px",  fontSize: '14px'}}>SHOP MEN</Button>
                                        <Button className="m-2" size="lg" variant="light" style={{width:"180px",  fontSize: '14px'}}>SHOP WOMEN</Button>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="myCard">Wool Runner</Card.Title>
                                        <Card.Text>Cozy Sneaker</Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </Tab>
                        <Tab eventKey="apparel" title={apparel}>
                        <CardGroup>
                                <Card border="light" className="m-3 border-0 showMyCard">
                                    <Card.Img variant="top" src={shopCardImg1}/>
                                    <div className="myButmda">
                                        <Button className="m-2"  size="lg" variant="light" style={{width:"180px",  fontSize: '14px'}}>SHOP MEN</Button>
                                        <Button className="m-2" size="lg" variant="light" style={{width:"180px",  fontSize: '14px'}}>SHOP WOMEN</Button>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="myCard">Tree Dasher</Card.Title>
                                        <Card.Text>Daily Running Shoe</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card border="light" className="m-3 border-0 showMyCard">
                                    <Card.Img variant="top" src={shopCardImg2}/>
                                    <div className="myButmda">
                                        <Button className="m-2"  size="lg" variant="light" style={{width:"180px",  fontSize: '14px'}}>SHOP MEN</Button>
                                        <Button className="m-2" size="lg" variant="light" style={{width:"180px",  fontSize: '14px'}}>SHOP WOMEN</Button>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="myCard">Tree Runner</Card.Title>
                                        <Card.Text>Light and Breezy Sneaker</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card border="light" className="m-3 border-0 showMyCard" variant="lig">
                                    <Card.Img variant="top" src={shopCardImg3}/>
                                    <div className="myButmda">
                                        <Button className="m-2"  size="lg" variant="light" style={{width:"180px",  fontSize: '14px'}}>SHOP MEN</Button>
                                        <Button className="m-2" size="lg" variant="light" style={{width:"180px",  fontSize: '14px'}}>SHOP WOMEN</Button>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="myCard">Wool Runner</Card.Title>
                                        <Card.Text>Cozy Sneaker</Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </Tab>
                        <Tab eventKey="basics" title={basics}>
                        <CardGroup>
                                <Card border="light" className="m-3 border-0 showMyCard">
                                    <Card.Img variant="top" src={cardImg1}/>
                                    <div className="myButmda">
                                        <Button className="m-2"  size="lg" variant="light" style={{width:"180px",  fontSize: '14px'}}>SHOP MEN</Button>
                                        <Button className="m-2" size="lg" variant="light" style={{width:"180px",  fontSize: '14px'}}>SHOP WOMEN</Button>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="myCard">Tree Dasher</Card.Title>
                                        <Card.Text>Daily Running Shoe</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card border="light" className="m-3 border-0 showMyCard">
                                    <Card.Img variant="top" src={cardImg2}/>
                                    <div className="myButmda">
                                        <Button className="m-2"  size="lg" variant="light" style={{width:"180px",  fontSize: '14px'}}>SHOP MEN</Button>
                                        <Button className="m-2" size="lg" variant="light" style={{width:"180px",  fontSize: '14px'}}>SHOP WOMEN</Button>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="myCard">Tree Runner</Card.Title>
                                        <Card.Text>Light and Breezy Sneaker</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card border="light" className="m-3 border-0 showMyCard">
                                    <Card.Img variant="top" src={cardImg3}/>
                                    <div className="myButmda">
                                        <Button className="m-2"  size="lg" variant="light" style={{width:"180px",  fontSize: '14px'}}>SHOP MEN</Button>
                                        <Button className="m-2" size="lg" variant="light" style={{width:"180px",  fontSize: '14px'}}>SHOP WOMEN</Button>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="myCard">Wool Runner</Card.Title>
                                        <Card.Text>Cozy Sneaker</Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </Tab>
                    </Tabs>  
                </Container>           

                <Image className="mb-5" src={ourFavoritesImg} style={{width: '100%'}}/>
                
                <h3 className="text-center">Colorful By Nature</h3>
                <p className="text-center">Merino Wool Shoes In Limited Edition Hues</p> 
                <div className="d-flex justify-content-center">
                    <Button className="m-3" variant="dark" style={{width: '180px', fontSize: '14px'}}>SHOP MEN</Button>
                    <Button className="m-3" variant="dark" style={{width: '180px', fontSize: '14px'}}>SHOP WOMEN</Button>
                </div>
            </div>
        );
    }
}
 
export default OurFavorites;
