import React, { useState } from 'react'
import ProductsJSON from '../../data/Products.json'
import CartJSON from '../../data/Cart.json'
import { Link } from 'react-router-dom'
import {Button} from '@mui/material';
import Button1 from 'react-bootstrap/Button';

function Main() {
  const [products, editProducts] = useState(ProductsJSON.slice());

  const toCart = (product) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];   
    cartLS.push(product);
    localStorage.setItem("cart", JSON.stringify(cartLS));   
  }

  const filterByCategory = (categoryClicked) => {
    const result = ProductsJSON.filter(product => product.category === categoryClicked);
    editProducts(result);
}

const filterByDiscount = () => {
  const result = ProductsJSON.filter(product => product.discount === "yes");
  editProducts(result);
}

const reset = () => {
  editProducts(ProductsJSON.slice())
 }

  return (  
    <div>
      <br />
        <div>
          <button onClick={filterByDiscount} className="btnImg">Find the biggest price drops here!</button> 
          <Button onClick={() => filterByCategory("men") }>Men's clothing</Button>       
          <Button onClick={() => filterByCategory("women")}>Women's clothing</Button>
          <Button onClick={() => filterByCategory("kids") }>Kids's clothing</Button>       
          <Button onClick={reset}>All products</Button>          
        </div><br />
      <div  className="container">
        {products.map((product, index )=>    
            <div className="item">
                <div> 
                  <img src={product.image} alt="" className="itemImg"></img><br />
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



