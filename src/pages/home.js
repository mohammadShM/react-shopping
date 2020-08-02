import React, { Component } from "react";
import { ProductList, productService } from "../components/product";
import "../font/font/font.css";

export class HomePage extends Component {
   state = { products: [] };

   fetchData() {
      productService
         .getProducts(this.props.location.search)
         .then((response) => this.setState({ products: response.data }));
   }

   componentDidMount() {
      this.fetchData();
   }

   componentDidUpdate() {
      this.fetchData();
   }

   render() {
      return (
         <div className="container">
            <div className="row">
               <ProductList products={this.state.products} />
            </div>
         </div>
      );
   }
}
