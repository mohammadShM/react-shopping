import React, {Component} from "react";
import {ProductList, productService} from "../components/product";

export class HomePage extends Component {

    state = {products: []};

    componentDidMount() {
        productService.getProducts()
            .then(response => this.setState({products: response.data}));
    }

    render() {
        return <div className="container">
            <div className="row">
                <ProductList products={this.state.products}/>
            </div>
        </div>
    }

}