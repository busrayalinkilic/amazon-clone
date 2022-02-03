import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>The Lean Startup</p>
        <p className="product_price">
          <small>$</small>
          <strong>19.99</strong>
        </p>

        <div className="product_rating">
          <p>⭐️</p>
        </div>
      </div>

      <img src="https://r.resimlink.com/5axsoV.jpg" alt="" />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
