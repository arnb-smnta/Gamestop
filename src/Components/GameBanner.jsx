import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { gamepagedata } from "./SecondaryComponents/gamepagedata";

const GameBanner = ({ gameslist, ids }) => {
  let game = gamepagedata(gameslist, ids);

  console.log(game);

  /*const gamepic = gameslist.filter(function (game) {
    if (game.id === parseInt(ids, 10)) return game;
  });*/

  return (
    <div>
      {game
        ? game?.short_screenshots.map((s) => (
            <div>
              <img key={s.id} src={s.image} alt="" />
            </div>
          ))
        : null}
    </div>
  );
};

export default GameBanner;
