import React from "react";
import { useState } from "react";

const Search: React.FC = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div className="flex items-center border-b border-b-glitch-box">
      <label htmlFor="search">
        <span className="material-icons text-gray-200 text-xl">search</span>
      </label>
      <input
        id="search"
        type="search"
        autoComplete="off"
        className={`w-1 sm:w-full px-2 py-2  text-gray-200 ${
          isFocused
            ? "w-screen absolute left-0 top-1 bg-glitch-box"
            : "w-full bg-transparent"
        }`}
        placeholder="Search..."
        onFocus={() => setIsFocused(!isFocused)}
        onBlur={() => setIsFocused(!isFocused)}
      />
    </div>
  );
};

export default Search;
