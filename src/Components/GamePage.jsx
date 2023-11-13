import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import apicall from "./SecondaryComponents/apicall";
import GameBanner from "./GameBanner";
import GameDescription from "./GameDescription";

const GamePage = () => {
  const gameslist = useSelector((appstore) => appstore.game.games);
  const [useparams] = useSearchParams();
  const id = useparams.get("id");
  const dispatch = useDispatch();
  useEffect(() => {
    if (!gameslist) apicall(dispatch);
  }, []);
  console.log(gameslist);
  return (
    <div>
      {gameslist ? (
        <div>
          <div>
            <GameBanner gameslist={gameslist} ids={id} />
          </div>
          <div>
            <GameDescription gameslist={gameslist} ids={id} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default GamePage;
