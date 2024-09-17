import React from "react";
import { useProuct } from "../context/ProductContext";

const ProductTitle = ({ title }) => {
  const { product } = useProuct();
  return <div className="product__info__name">{product.title}</div>;
};

export default ProductTitle;
