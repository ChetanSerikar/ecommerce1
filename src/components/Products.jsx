import React from "react";
import { items } from "./Alldata";
import { Link } from "react-router-dom";
import Product from "./Product";
import ProductImg from "./ProductImg";
import ProductInfo from "./ProductInfo";
import ProductTitle from "./ProductTitle";
import ProductPrice from "./ProductPrice";

export const Products = ({ products }) => {
  return (
    <div>
      <div className="product_container">
        {products.map((product, i) => (
          <Product
            key={i}
            product={product}
            id={product.id}
            image={<Product.Image />}
            info={
              <Product.Info>
                <Product.Title />
                <Product.Price />
              </Product.Info>
            }
          />
        ))}
      </div>
    </div>
  );
};
