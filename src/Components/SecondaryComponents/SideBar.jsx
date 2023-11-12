import React from "react";
import { useDispatch } from "react-redux";
import { togglemenu } from "../../ReduxComponents/menuSlice";

const SideBar = () => {
  return (
    <div className="h-full">
      <div>
        <ul>
          <li>link</li>
          <li>link</li>
          <li>link</li>
          <li>link</li>
          <li>link</li>
          <li>link</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
