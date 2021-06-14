import React, { Component } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import prevImg from '../Assets/prevImg.png'

export default class CarouselBox extends Component {
    render(){
        return(
            <div style={{paddingBottom: '50px'}}>
                <Carousel controls={false} indicators={false}>
                    <Carousel.Item>
                        <img 
                            className="d-block w-100"
                            src={ prevImg }
                            alt="girl"
                        />
                        <Carousel.Caption style={{top: '40%'}}>
                            <h3 className="d-none d-sm-block" style={{fontSize: '40px', lineHeight:'63px'}}>Running Shoes Made From Trees</h3>
                            <p className="d-none d-sm-block" style={{fontSize: '16px', lineHeight:'24px'}}>New colors to keep you moving</p>
                        </Carousel.Caption>
                        <Carousel.Caption style={{paddingBottom: '50px'}}>
                            <Button size="lg" variant="light" style={{margin: '50px', fontSize: '14px', width: '180px'}} className="mb-0 mt-2" >SHOP MEN</Button>
                            <Button size="lg" variant="light" style={{margin: '50px', fontSize: '14px', width: '180px'}} className="mb-0 mt-2">SHOP WOMEN</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
};