import React from "react";
import { useDispatch, useSelector } from "react-redux";
import appstore from "../ReduxComponents/appstore";
import {
  removeallitem,
  removesingleeleement,
} from "../ReduxComponents/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartdata = useSelector((appstore) => {
    return appstore.cart.items;
  });
  const removeitem = (i) => {
    dispatch(removesingleeleement(i));
  };

  const removeall = () => {
    dispatch(removeallitem());
  };
  return (
    <div>
      {cartdata.length ? (
        cartdata.map((cart, index) => (
          <div className="flex">
            <div className="mx-2 my-2">{cart} Game </div>
            <div className="mx-2 my-2">
              <button
                onClick={(index) => removeitem(index)}
                className="bg-blue-500"
              >
                Remove game
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Empty Cart</p>
      )}

      <div>
        <button className="bg-blue-400 m-4" onClick={removeall}>
          Clear cart{" "}
        </button>
      </div>
    </div>
  );
};

export default Cart;
