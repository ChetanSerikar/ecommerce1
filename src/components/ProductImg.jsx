import React from "react";
import { useProuct } from "../context/ProductContext";
import { useState } from "react";
import LoadingImage from "./LoadingImage";

const ProductImg = ({ img }) => {


  const { product } = useProuct();


  return <>
    {/* {isLoading && <div style={{ width: "100%", height: "200px", display: "flex", justifyContent: "center", alignItems: "center" }} className="image-placeholder"><span>Loading...</span></div>}
    <img src={product?.thumbnail || img}
      alt=""
      className={`product-image ${isLoading ? "hidden" : ""}`} // Hide image until it's loaded
      onLoad={handleImageLoad} /> */}
    <LoadingImage src={product?.thumbnail || img} />
  </>;
};

export default ProductImg;
