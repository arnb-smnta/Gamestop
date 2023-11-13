import React from "react";
import { useDispatch } from "react-redux";
import { updategamepage } from "../../ReduxComponents/gameSlice";

const GameCard = ({ game }) => {
  const dispatch = useDispatch();

  const updategamepages = () => {
    dispatch(updategamepage(game));
  };
  return (
    <div
      className="border border-black w-[18rem] h-[24rem] m-4 cursor-pointer"
      onClick={updategamepages}
    >
      <div>
        <img
          className="h-[12rem] border border-black "
          src={game.background_image}
          alt=""
        />
      </div>
      <div>
        <h1>{game.name}</h1>
        <h2>Ratings:{game.rating}</h2>
      </div>
    </div>
  );
};

export default GameCard;
