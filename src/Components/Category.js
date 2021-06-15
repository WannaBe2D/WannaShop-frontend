import React, { Component } from 'react';
import { ListGroup, Container, Col, Button } from 'react-bootstrap'
import ProductList from './ProductList';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: true, items: null, categoryID: null}
        this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount(){
        const url = "http://127.0.0.1:8000/api/categories/"
        const response = await fetch(url)
        const data = await response.json()
        this.setState({items: data, loading:false, categoryID:data[0].id})
    }

    handleClick(id, e) {
        e.preventDefault();
        this.setState({categoryID: id})
      }

    render() { 
        if(this.state.loading){
            return <div>loading...</div>
        }
        if(!this.state.items){
            return <div>items...</div>
        }
        const categoryJSX = this.state.items.map((category, i) => (
            <ListGroup.Item key={i} action onClick={(e) => this.handleClick(category.id, e)}>{category.name}</ListGroup.Item>
        ))

        return (
            <> 
                <Container>
                    <Col md="2" className="m-4">
                        <ListGroup horizontal>
                            {categoryJSX}
                        </ListGroup>
                    </Col>
                </Container>
                <ProductList categoryID={this.state.categoryID} />
            </>
         );
    }
}
 
export default Category;