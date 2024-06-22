import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../components/Alldata";
import { News } from "../components/News";
import { Footer } from "../components/Footer";
import { useShoppingCart } from "../context/ShoppingCartContext";

export const ProductPage = () => {
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));

  const [image, setImage] = useState(item.img);
  const [quantity, setQuantity] = useState(1);

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
        <div>
          <div className="product_page_conatiner">
            <div className="right">
              <div className="main_image">
                <img src={image} />
              </div>
              <div className="images">
                <img onMouseOver={changeImage} src={item.img} alt="product" />
                <img
                  onMouseOver={changeImage}
                  src={item.otherImgs[0]}
                  alt="product"
                />
                <img
                  onMouseOver={changeImage}
                  src={item.otherImgs[1]}
                  alt="product"
                />
              </div>
            </div>
            <div className="left">
              <div className="left_container">
                <div className="product_title"> {item.description} </div>
                <div className="product_discription"> {item.specs} </div>
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
      </div>
      <div className="details">
        <div className="detail">
          <div className="heading"> Texture </div>
          <diV>{item.texture} </diV>
        </div>
        <div className="detail">
          <div className="heading"> Weight </div>
          <diV>{item.weight} </diV>
        </div>
        <div className="detail">
          <div className="heading"> Size </div>
          <diV>{item.size} </diV>
        </div>
      </div>
      <News />
      <Footer />
    </>
  );
};
