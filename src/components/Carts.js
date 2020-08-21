import React, { useState, useEffect} from 'react';
import Product from './product';
import "../scss/Carts.scss";

const Carts = () => {
  return(
    <div className="carts">
      <div className="carts__header">
        <p className="count__sort">21,469 results found in 3ms</p>
        <div className="sort">
          <label for="sort">Sort by</label>
          <select id="sort">
            <option>Featured</option>
            <option>Price asc</option>
            <option>Price desc</option>
          </select>
        </div>
      </div>
      <div className="carts__main">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div class="carts__pagination">
        <a href="#">&laquo; Previous page</a>
        <a href="#" className="active">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">Next page &raquo;</a>
      </div>
    </div>
  )
}

export default Carts;