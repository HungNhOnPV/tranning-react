import React, { useState, useEffect} from 'react';
import "../scss/Product.scss";

const Carts = () => {
  return(
    <div className="product">
      <img src="http://dummyimage.com/183x153.jpg/5fa2dd/ffffff" alt="product-image" />
      <h2>Ngo thi huong</h2>
      <p>xinh gai</p>
      <div className="product__detail">
        <div className="product__detail__star">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <p className="product__detail__pay">300$</p>
      </div>
    </div>
  )
}

export default Carts;