import { useContext, useEffect, useState } from "react";

import { IconX } from "@tabler/icons-react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { items } from "./Alldata";
import LoadingImage from "./LoadingImage";

function CartItem({ cartItem, setTotal, total }) {
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState({})



  const { cartItems, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const { removeFromCart } = useShoppingCart();


  const calcPrice = (quantity, item) => {
    // setTotal((quantity * item));
    return quantity * item;
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${cartItem.id}`)
      .then(res => res.json())
      .then(data => {
        setItem(data)
      });
  }, [cartItem?.id])

  useEffect(() => {
    setTotal(prev => prev + cartItem.quantity * item?.price)
  }, [cartItem.quantity, item.price])

  // const currenPro = items.find((i) => i.id === item.id);

  return (
    <>
      <div className="cart-item">
        <div className="cart-img">
          <LoadingImage src={item.thumbnail} alt="product" />
        </div>
        <div className="cart-middle">
          <p className="cart-name">{item.title}</p>
          <div className="cart-btns">
            <button onClick={() => decreaseCartQuantity(item.id)}>-</button>
            <p className="quantity">{cartItem.quantity}</p>
            <button onClick={() => increaseCartQuantity(item.id)}>+</button>
          </div>
        </div>
        <div className="cart-right">
          <p className="cart-price">
            {calcPrice(cartItem.quantity, item.price)}$
          </p>
          <IconX onClick={() => removeFromCart(item.id)} />
        </div>
      </div>
    </>
  );
}

export default CartItem;
