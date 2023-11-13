import React from "react";
import { useSelector } from "react-redux";
import GameCard from "./SecondaryComponents/GameCard";
import { Link } from "react-router-dom";

const CardContainer = () => {
  const games = useSelector((appstore) => appstore.game.games);
  return (
    <div className="flex flex-wrap">
      {games
        ? games.map((game) => (
            <Link to={"/game?id=" + game.id} key={game.id}>
              {" "}
              <GameCard game={game} />
            </Link>
          ))
        : null}
    </div>
  );
};

export default CardContainer;
