import React from "react";
import { items } from "./Alldata";
import { Link } from "react-router-dom";
import Product from "./Product";

export const Products = ({ products }) => {
  return (
    <div>
      <div className="product_container">
        {products.map((product, i) => (
          <Product key={i} product={product} />
        ))}
      </div>
    </div>
  );
};
