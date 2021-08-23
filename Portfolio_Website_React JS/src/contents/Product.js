import React from 'react'
import Widecard from '../components/Widecard';
const Product = ({products}) => {
    return (
        <div>
            <h1><u>Product List</u></h1>
            <br></br>
            {products.map((product) => (
                <div class="card">
                    <div class="card-body">
                        {/* <h3 class="card-title">{product.id}</h3>
                        <h2 class="card-subtitle mb-2 text-muted"><b>{product.title}</b></h2>
                        <p class="card-text"> Rs {product.description}</p> */}

                        <Widecard Name={product.title} Price="1200" Discount="10%" Quality={product.description}/>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Product