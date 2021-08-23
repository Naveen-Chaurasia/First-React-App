import React, { Component } from "react";
import Product from "../contents/Product";
class Products extends Component {
  state = {
    products: [],
    isLoaded: false,
  };

  render() {
    return (
      <div className="condiv">
        {/* <h1>dsjhsvbjshdbvjhbsdfjhvbsjdhfgsdf</h1> */}

        {/* <div className="col">
          <h1>Mi Casa</h1>
          <p>This is my house y&apos;all!</p>
          {this.state.products.map((product) => (
            <div>{product.title}</div>
          ))}
        </div> */}
        <Product products={this.state.products} />
      </div>
    );
  }
  componentDidMount() {
    fetch("http://localhost:9090/courses")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ products: data, isLoaded: true });
      })
      .catch(console.log);
  }
}

export default Products;
