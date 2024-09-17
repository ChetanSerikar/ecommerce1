import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useContext, useEffect, useState } from "react";
import EmptyCart from "./EmptyCart";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { items } from "./Alldata";

function CartWithItems() {
  const { cartItems } = useShoppingCart();
  const [total, setTotal] = useState(0)

  useEffect(() => {
    fetch('https://dummyjson.com/carts/user/1')
      .then(res => res.json())
      .then(console.log);
  }, [])

  return (
    <>
      <div className="full-cart-div">
        <div className="full-cart">
          {cartItems.map((item, id) =>
            cartItems.length !== 0 ? (
              <CartItem key={id} cartItem={item} setTotal={setTotal} total={total} />
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
            {`Total: ` + total
            }
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
