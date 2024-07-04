import React from 'react'
import ProductsJSON from '../../data/Products.json'
import { useParams } from 'react-router-dom'

function SingleProduct() {
    const {index } = useParams();
    const found = ProductsJSON[index];
  
    if (found === undefined) {
      return <div>Product not found</div>
    }
    
    return (
      <div>  
        <br />
        <div className="t2">{found.title} </div> <br />
        <hr></hr>
        <div className='item2'>
      
          Sale price: <b>{found.price}.00 eur</b> <br />
          Full price: {found.oldPrice}.00 eur <br />
          Category: {found.category} <br /> <br />
          Product description: <i> {found.description} </i><br /> <br /> 
          <img src={found.image} alt=""></img><br />
        </div> 
      </div>
  )
}

export default SingleProduct