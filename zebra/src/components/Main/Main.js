import React, { useState } from 'react'
import ProductsJSON from '../../data/Products.json'
import CartJSON from '../../data/Cart.json'
import { Link } from 'react-router-dom'
import {Button} from '@mui/material';
import Button1 from 'react-bootstrap/Button';

function Main() {
  const [products, editProducts] = useState(ProductsJSON.slice());

  const toCart = (product) => {
    CartJSON.push(product);
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];   // JSON.parse nö "" mahavõtmine
    
    const found = cartLS.find(cp => cp.toode.id === product.id);    // cart product
    if (found === undefined) {
      cartLS.push({kogus: 1, toode: product});
    } else {
       found.kogus = found.kogus + 1;
    }

    cartLS.push(product);
    localStorage.setItem("cart", JSON.stringify(cartLS));   

  }

  return (  
    <div>
      <br />
      <div className="text1">  All items on sale!</div><br />
      <div  className="container">
        {products.map((product, index )=>    
            <div className="item">
                <div> 
                  <img src={product.image} alt=""></img><br />
                  {product.title} <br />
                  <b> Sale price: {product.price}.00 eur </b> <br />
                  Full price: {product.oldPrice}.00 eur <br />
                  <Link to={"/product/" + index }> <Button>Product details</Button>
                   </Link> <br />
                   <Button1 onClick={() => toCart(product)} variant="outline-info">Add to cart</Button1><br />
                </div>
          </div>  
 
    )}
    </div>      
  </div>
 );
}

export default Main



