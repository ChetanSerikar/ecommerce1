import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../components/Alldata";
import { News } from "../components/News";
import { Footer } from "../components/Footer";
import { useShoppingCart } from "../context/ShoppingCartContext";
import Caresoul from "../components/Caresoul";
import { useEffect } from "react";
import LoadingImage from "../components/LoadingImage";

export const ProductPage = () => {
  const [item, setItem] = useState({})
  const { id } = useParams();
  // const item = items.find((item) => item.id === parseInt(id));

  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setItem(data)
        setImage(data?.thumbnail)
        setQuantity(1);
        console.log(data, "id")
      });
  }, [id])


  const { increaseProductQuantity } = useShoppingCart();

  const changeImage = (e) => {
    setImage(e.target.src);
  };

  function increase(id, quantity) {
    setQuantity((currentvalue) => currentvalue + 1);
  }

  function decrease() {
    setQuantity((currentvalue) =>
      currentvalue > 1 ? currentvalue - 1 : currentvalue
    );
  }

  return (
    <>
      <div className="product_page container-1">

          <div className="product_page_conatiner">
            <div className="right">
              <div className="main_image">
              <LoadingImage src={image} />
              </div>
              <div className="images">
              {
                item.images?.map((img, i) => (
                  <div className="secondry_image" key={i}>
                    <LoadingImage src={img} onMouseOver={changeImage} alt="" />
                  </div>
                ))
              }

              </div>
            </div>
            <div className="left">
              <div className="left_container">
              <div className="product_title"> {item.title} </div>
              <div className="product_discription"> {item.description} </div>
                <div className="quantity_container">
                  <div className="quantity">Quantity</div>
                  <div className="add_sub">
                    <button onClick={decrease}>-</button>
                    <p> {quantity} </p>
                    <button onClick={increase}>+</button>
                  </div>
                  <div className="total_price">
                    ${quantity > 1 ? quantity * item.price : item.price}
                  </div>
                </div>
                <div className="buttons">
                  <button
                    className="add_to_cart"
                    onClick={() => increaseProductQuantity(item.id, quantity)}
                  >
                    Add to cart
                  </button>
                  <button className="buy_now">Buy Now</button>
                </div>
              </div>
            </div>
          </div>

      </div>
      <div className="details">
        <div className="detail">
          <div className="heading"> Depth </div>
          <diV>{item.dimensions?.depth} </diV>
        </div>
        <div className="detail">
          <div className="heading"> Width </div>
          <diV>{item.dimensions?.width} </diV>
        </div>
        <div className="detail">
          <div className="heading"> Height </div>
          <diV>{item.dimensions?.height} </diV>
        </div>
      </div>
      <Caresoul />
      <News />
      <Footer />
    </>
  );
};
