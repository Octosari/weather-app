import { useState } from "react";
import seachLogo from "../assets/icons/search.svg";

const SearchBar = ({ cityFromInput }) => {
  const handleClick = (e) => {
    e.preventDefault();
    cityFromInput(input);
  };

  const [input, setInput] = useState("");

  return (
    <div className="searchBar">
      <form>
        <input
          placeholder="Search"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button onClick={handleClick}>
          <img draggable="false" src={seachLogo} alt="search" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
