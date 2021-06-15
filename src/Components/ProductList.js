import React, { Component } from 'react';
import { CardGroup, Card, Container, Row } from 'react-bootstrap'

class ProductList extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true, 
            items: null,
        }
    }
    async componentDidMount() {
        const url = `http://localhost:8000/api/categories/${this.props.categoryID}/`
        const response = await fetch(url)
        const data = await response.json()
        this.setState({items: data.products, loading: false})
    }


    render() {
        if(this.state.loading) {
            return <div>loading...</div>
        }
        if(!this.state.items) {
            return <div>items...</div>
        }

        let link = 'http://127.0.0.1:8000'
        const productJSX = this.state.items.map((prod, i) =>(
            <Card key={i} className="border-0 col-lg-3 col-md-4 col-sm-5">
                <Card.Img src={link + prod.image[0]} />
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Text>${prod.price}</Card.Text>
                </Card.Body>
            </Card>
        ))

        return ( 
            <Container>
                <h2>{this.props.categoryKey}</h2>
                <Row className="mt-4">
                    {productJSX}
                </Row>
           </Container>
         );
    }
}
 
export default ProductList;