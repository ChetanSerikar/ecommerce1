import { useContext, useEffect, useState } from "react";

import { IconX } from "@tabler/icons-react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { items } from "./Alldata";
import LoadingImage from "./LoadingImage";

function CartItem({ cartItem, setTotal, total }) {
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState({})
  const [prevQuantity, setPrevQuantity] = useState()



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
        // setTotal(prev => prev + (cartItem.quantity * data?.price))

      });
  }, [cartItem?.id, cartItem.quantity])

  // useEffect(() => {
  //   setTotal(prev => prev + cartItem.quantity * item?.price)
  // }, [cartItem.quantity])
  useEffect(() => {
    if (item.price !== undefined) {
      setTotal(prev => {
        const oldContribution = prevQuantity * item.price;
        const newContribution = cartItem.quantity * item.price;
        return prev - oldContribution + newContribution;
      });
      setPrevQuantity(cartItem.quantity);
    }
    return () => {
      if (item.price !== undefined) {
        setTotal(prev => prev - cartItem.quantity * item.price);
      }
    };
  }, [cartItem.quantity, item.price, setTotal]);

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
