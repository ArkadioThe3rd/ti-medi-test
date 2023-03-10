import { useEffect, useState } from "react";

interface ISearchBar {
  className?: string;
  searchHandler?(e?: string): void;
  isInvalid: boolean;
}

const SearchBar = ({ searchHandler, className, isInvalid }: ISearchBar) => {
  const [busqueda, setBusqueda] = useState("");
  const [invalidClass, setInvalidClass] = useState("");
  const inputHandler = (e: any) => {
    setBusqueda(e.target.value);
  };

  useEffect(() => {
    console.log(isInvalid);
    if (isInvalid) {
      setInvalidClass("border-red-400");
    } else {
      setInvalidClass("");
    }
  }, [isInvalid]);

  return (
    <div
      className={`bg-gray-300 pl-3 pr-1   h-11 border rounded-lg flex flex-row items-center ${className} ${invalidClass}`}
    >
      <input
        role={"search"}
        className="bg-transparent flex-auto outline-none"
        placeholder="Search Github repositories"
        type="text"
        onChange={(e) => inputHandler(e)}
      />
      <button
        role="button"
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
