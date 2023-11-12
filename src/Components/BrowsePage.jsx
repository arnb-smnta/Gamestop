import React from "react";
import CardContainer from "./CardContainer";
import SideBar from "./SecondaryComponents/SideBar";
import { useDispatch, useSelector } from "react-redux";
import appstore from "../ReduxComponents/appstore";
import { togglemenu } from "../ReduxComponents/menuSlice";

const BrowsePage = () => {
  const menuvalue = useSelector((appstore) => appstore.menu.menuopen);
  const dispatch = useDispatch();
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
