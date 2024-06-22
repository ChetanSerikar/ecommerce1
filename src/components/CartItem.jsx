import { useContext, useEffect, useState } from "react";

import { IconX } from "@tabler/icons-react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { items } from "./Alldata";

function CartItem({ id, item }) {
  const [quantity, setQuantity] = useState(1);

  const { cartItems, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const { removeFromCart } = useShoppingCart();

  const calcPrice = (quantity, item) => {
    return quantity * item;
  };

  const currenPro = items.find((i) => i.id === item.id);

  return (
    <>
      <div key={id} className="cart-item">
        <div className="cart-img">
          <img src={currenPro.img} alt="product" />
        </div>
        <div className="cart-middle">
          <p className="cart-name">{currenPro.description}</p>
          <div className="cart-btns">
            <button onClick={() => decreaseCartQuantity(item.id)}>-</button>
            <p className="quantity">{item.quantity}</p>
            <button onClick={() => increaseCartQuantity(item.id)}>+</button>
          </div>
        </div>
        <div className="cart-right">
          <p className="cart-price">
            {calcPrice(quantity, currenPro.price)}.00$
          </p>
          <IconX onClick={() => removeFromCart(item.id)} />
        </div>
      </div>
    </>
  );
}

export default CartItem;
