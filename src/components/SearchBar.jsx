import seachLogo from "../icons/search.svg";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <form>
        <input placeholder="Search" />
        <button>
          <img src={seachLogo} alt="search" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
