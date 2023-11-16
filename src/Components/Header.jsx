import React from "react";
import SearchBar from "./SecondaryComponents/SearchBar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const Cartdata = useSelector((appstore) => appstore.cart.items);
  return (
    <div className="flex justify-between p-8 bg-black rounded-lg text-white">
      <img
        src="https://static.vecteezy.com/system/resources/previews/002/547/495/original/gothic-sign-with-skull-and-wings-grunge-vintage-design-t-shirts-vector.jpg"
        alt="Gamstop LOGO"
        className="h-12"
      />
      <SearchBar />
      <a href="/cart">
        {" "}
        <img
          src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
          alt="cart icon"
          className="h-8 bg-white cursor-pointer"
        />
        {Cartdata.length ? (
          <p className="absolute  ">{Cartdata.length}</p>
        ) : null}
      </a>
    </div>
  );
};

export default Header;
