import { useState } from "react";

interface ISearchBar {
  className?: string;
  searchHandler?(e?: string): void;
}

const SearchBar = ({ searchHandler, className }: ISearchBar) => {
  const [busqueda, setBusqueda] = useState("");

  const inputHandler = (e: any) => {
    setBusqueda(e.target.value);
  };

  return (
    <div
      className={`bg-gray-300 pl-3 pr-1  h-11 border rounded-lg flex flex-row items-center ${className}`}
    >
      <input
        className="bg-transparent flex-auto outline-none"
        placeholder="Search Github repositories"
        type="text"
        onChange={(e) => inputHandler(e)}
      />
      <button
        aria-label="search"
        type="button"
        onClick={() => searchHandler?.(busqueda)}
        className="bg-gray-700 hover:bg-slate-500 border rounded w-16 h-9 ml-0.5 text-white text-sm font-medium"
      >
        search
      </button>
    </div>
  );
};

SearchBar.defaultProps = {
  searchHandler: () => {},
  className: "",
};

export default SearchBar;
