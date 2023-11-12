import React, { useEffect } from "react";
import SearchBar from "./SecondaryComponents/SearchBar";
import { RAWG_API_KEY } from "../Utils/Constants";

const Header = () => {
  useEffect(() => {
    apicall();
  }, []);
  const apicall = async () => {
    const data = await fetch(
      `https://api.rawg.io/api/games?token&key=${RAWG_API_KEY}`
    );
    const json = await data.json();
    console.log(json);
  };

  return (
    <div className="flex justify-between p-8 bg-black rounded-lg text-white">
      <img
        src="https://static.vecteezy.com/system/resources/previews/002/547/495/original/gothic-sign-with-skull-and-wings-grunge-vintage-design-t-shirts-vector.jpg"
        alt="Gamstop LOGO"
        className="h-12"
      />
      <SearchBar />

      <img
        src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
        alt="cart icon"
        className="h-8 bg-white"
      />
    </div>
  );
};

export default Header;
