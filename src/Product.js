import React from "react";
import "./Product.css";

function Product({title, image, price, rating}) {

  function getRating(rate){
    if(rate===3){
      return  <p>🌟🌟🌟</p>;
    }
    if(rate===4){
      return  <p>🌟🌟🌟🌟</p>;
 
    }
    if(rate===5){
      return  <p>🌟🌟🌟🌟🌟</p>;
    }
    if(rate===3){
      return  <p>🌟🌟🌟</p>;
 
    }
    if(rate===2){
      return  <p>🌟🌟</p>;
 
    }
  }
  return (
    <div className="product">
      <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
              <small>$</small>
              <strong>{price}</strong>
          </p>
          
          <div className="product__rating">
        {getRating(rating)}
            
          </div>
      </div>

      <img src={image} alt=""/>
      <button>Add to Basket</button>
    </div>
  )
}

export default Product;