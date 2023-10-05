import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <div className="mx-auto my-4 w-[32rem]">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="default-search"
          className="sr-only mb-2 text-sm font-medium"
        ></label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="w-6" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-slate-500  outline-slate-500 focus:border-slate-500 focus:ring-slate-500 "
            placeholder="Search high-resolution images"
            required
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            type="submit"
            className="absolute bottom-2.5 right-2.5 rounded-lg bg-slate-500 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-slate-300"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
