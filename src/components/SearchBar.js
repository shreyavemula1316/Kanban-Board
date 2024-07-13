import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = ({ onSearch }) => {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="input-wrapper" id="search-icon">
      <FaSearch />
      <input
        placeholder="search here..."
        onChange={handleSearchChange}
      />
    </div>
  );
};
