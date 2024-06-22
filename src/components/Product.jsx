import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="product">
      <Link to={`/productpage/${product.id}`}>
        <img src={product.img} />
        <div className="product__info">
          <div className="product__info__name">{product.description}</div>
          <div className="product__info__price">${product.price}</div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
