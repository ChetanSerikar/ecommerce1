import React from "react";
import { useProuct } from "../context/ProductContext";

const ProductPrice = ({ price }) => {
  const { product } = useProuct();
  return <div className="product__info__price">${product.price}</div>;
};

export default ProductPrice;
