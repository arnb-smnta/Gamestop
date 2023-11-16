import React from "react";
import { useSelector } from "react-redux";
import appstore from "../ReduxComponents/appstore";

const Cart = () => {
  const cartdata = useSelector((appstore) => {
    return appstore.cart.items;
  });

  return (
    <div>
      {cartdata.length ? (
        cartdata.map((cart) => <div>{cart} Game</div>)
      ) : (
        <p>Empty cart</p>
      )}
    </div>
  );
};

export default Cart;
