import React from "react";
import { gamepagedata } from "./SecondaryComponents/gamepagedata";
import { useDispatch } from "react-redux";
import { addtocart } from "../ReduxComponents/CartSlice";
import { Link } from "react-router-dom";

const GameDescription = ({ gameslist, ids }) => {
  let game = gamepagedata(gameslist, ids);
  const dispatch = useDispatch();
  const additem = (e) => {
    e.preventDefault();

    dispatch(addtocart(parseInt(ids, 10)));
  };
  return (
    <div className="flex">
      <div>
        {game
          ? game?.tags.map((g, index) => <p key={index}>{g.name}</p>)
          : null}
      </div>
      <div className="m-[24rem]">
        <button className="bg-blue-400 text-white w-12 h-12" onClick={additem}>
          Add to cart
        </button>
      </div>

      <Link to="/cart" className="bg-black h-8 mt-8 text-white">
        <button>Cart</button>
      </Link>
    </div>
  );
};

export default GameDescription;
