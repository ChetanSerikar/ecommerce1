import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useContext, useEffect, useState } from "react";
import EmptyCart from "./EmptyCart";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { items } from "./Alldata";

function CartWithItems() {
  const { cartItems } = useShoppingCart();

  return (
    <>
      <div className="full-cart-div">
        <div className="full-cart">
          {cartItems.map((item, id) =>
            cartItems.length !== 0 ? (
              <CartItem key={id} item={item} />
            ) : (
              <EmptyCart key={id} />
            )
          )}
        </div>
      </div>
      <div className="subtotal-div">
        <div className="sub-right">
          <p>Subtotal</p>
          <p className="total-price">
            {" "}
            {`Total: ` +
              cartItems.reduce((total, CartItem) => {
                const item = items.find((i) => i.id === CartItem.id);
                return total + (item?.price || 0) * CartItem.quantity;
              }, 0)}
          </p>
        </div>
        <div className="sub-left">
          <Link>Go to Checkout</Link>
        </div>
      </div>
    </>
  );
}

export default CartWithItems;
