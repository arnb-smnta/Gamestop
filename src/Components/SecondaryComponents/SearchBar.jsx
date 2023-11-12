import React from "react";

const SearchBar = () => {
  return (
    <div>
      <input className="w-3/4 border border-black rounded-l-full" type="text" />
      <button className="border border-black rounded-r-full">Search</button>
    </div>
  );
};

export default SearchBar;
