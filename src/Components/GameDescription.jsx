import React from "react";
import { gamepagedata } from "./SecondaryComponents/gamepagedata";

const GameDescription = ({ gameslist, ids }) => {
  let game = gamepagedata(gameslist, ids);
  return (
    <div className="flex">
      <div>{game ? game?.tags.map((g) => <p>{g.name}</p>) : null}</div>
      <div className="m-[24rem]">
        <button className="bg-blue-400 text-white w-12 h-12">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default GameDescription;
