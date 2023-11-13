import React, { useEffect } from "react";
import CardContainer from "./CardContainer";
import SideBar from "./SecondaryComponents/SideBar";
import { useDispatch, useSelector } from "react-redux";
import appstore from "../ReduxComponents/appstore";
import { togglemenu } from "../ReduxComponents/menuSlice";
import { RAWG_API_KEY } from "../Utils/Constants";
import { updategames } from "../ReduxComponents/gameSlice";
import apicall from "./SecondaryComponents/apicall";

const BrowsePage = () => {
  const dispatch = useDispatch();
  const games = useSelector((appstore) => appstore.game.games);
  useEffect(() => {
    if (!games) apicall(dispatch);
  }, []);

  const menuvalue = useSelector((appstore) => appstore.menu.menuopen);

  const toggle = () => {
    dispatch(togglemenu());
  };
  return (
    <div className="grid grid-flow-col">
      <div className="col-span-1 bg-slate-400 h-[64rem]">
        <div>
          <button onClick={toggle}>
            <img
              className="h-8"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
              alt="hamburger menu"
            />
          </button>
        </div>
        {menuvalue ? <SideBar /> : null}
      </div>
      <div className="col-span-11">
        <CardContainer />
      </div>
    </div>
  );
};

export default BrowsePage;
