import React, { useState, useEffect} from 'react';
import "../scss/Product.scss";

const Products = (props) => {
  const [cart, setCart] = useState(props.cart);

  useEffect(() => {
    setCart(props.cart);
  }, [props.cart]);

  const showStar = (star) => {
    let result = [];
    for(let i = 1; i <= star; i++) {
      result.push(<i class="fas fa-star"></i>);
    }
    for(let i = star+1; i <= 5; i++) {
      result.push(<i class="far fa-star"></i>);
    }
    return result;
  }

  return(
    <div className="product">
      <img src={cart.image} alt="product-image" />
      <h2>{cart.name}</h2>
      <p>{cart.type}</p>
      <div className="product__detail">
        <div className="product__detail__star">
          {showStar(cart.star)}
        </div>
        <p className="product__detail__pay">{cart.price}$</p>
      </div>
    </div>
  )
}

export default Products;