import React, { useEffect, useState } from 'react'
// import Button1 from 'react-bootstrap/Button';
// import ProductsJSON from '../../data/Products.json'
// import CartJSON from '../../data/Cart.json'

function Cart() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  // useEffect(() => {
    
  // }, []);
 
  function del(index) {
    products.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(products));
    setProducts(products.slice());
  }

  // function empty(){
  //   products.splice(0)    
  //   localStorage.setItem("cart", JSON.stringify(products)); // kui ei pane (0,100) teist nr, on lõpmatu kogus, mida kustutab
  //   setProducts(products.slice(0))
  // }

  function addUp(){
    let sum = 0;
    products.forEach(product => sum = sum + product.price * product.amount);
    return sum;   
  }

  // const decreaseQuantity = (index) => {
  //   products[index].kogus =  products[index].kogus - 1
  //   if (products[index].kogus === 0) {
  //     products.splice(index,1);
  //   }
  //   localStorage.setItem("cart", JSON.stringify(products));
  //   setProducts(products.slice(0))
  // } 

  // const increaseQuantity = (index) => {
  //   products[index].amount =  products[index].amount + 1
  //   localStorage.setItem("cart", JSON.stringify(products));
  //   setProducts(products.slice(0))
  // }
  
  return (
    <div>
        <br /> 
        <div className="t2"><b>Your Cart</b></div><br /><hr />
        <div>
          <div className="cart-sum">
              Amount of items in cart: {products.length} <br />
              {/* <button onClick={reset}>Tooted reset</button> */}
              <div>Products sum: {addUp()} eur</div> 
            </div>
            {/* {products.length > 0 &&  <Button1 variant="outline-info" onClick={empty}>Delete all items form Cart</Button1> } */}
             <br /><br />
            {products.map ((product, index) =>
                <div className="cart" key={index}>
                    <img className="cart-img" src={product.image} alt="" />
                    <div> {product.title} </div>
                    <div> {product.price} eur</div>
                    {/* <button onClick={() => decreaseQuantity(index)}>Add item</button> */}
                    {/* <div>{product.amount} items </div> */}
                    {/* <button onClick={() => increaseQuantity(index)}>+</button> */}
                    <div>{product.price * product.amount} eur </div>
                    <button onClick={() => del(index)}>Remove from cart</button>
                    {/* <button className={styles.button} onClick={() => add(product)}>Add product</button>     */}
                </div>
        )}</div>
    </div>
  )
}

export default Cart