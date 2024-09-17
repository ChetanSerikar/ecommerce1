import React from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import ProductImg from "./ProductImg";
import ProductInfo from "./ProductInfo";
import ProductTitle from "./ProductTitle";
import ProductPrice from "./ProductPrice";

const Product = ({ product, id, image, info }) => {
  return (
    <>
      <ProductContext.Provider value={{ product }}>
        <div className="product">
          <Link to={`/productpage/${id}`}>
            {/* <img src={product.img} /> */}
            {image}
            {/* <div className="product__info">
          <div className="product__info__name">{product.description}</div>
          <div className="product__info__price">${product.price}.00</div>
        </div> */}
            <div className="product__info">{info}</div>
          </Link>
        </div>
      </ProductContext.Provider>
    </>
  );
};

Product.Image = ProductImg;
Product.Info = ProductInfo;
Product.Title = ProductTitle;
Product.Price = ProductPrice;

export default Product;
