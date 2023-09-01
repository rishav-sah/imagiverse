import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { getCollections } from "../utils/api";

const Search = ({ getSearchedPhotos }) => {

  const [searchInput, setSearchInput] = useState("");

  const getPhotoCollections = async (term) => {
    const data = await getCollections(term);
    getSearchedPhotos(data.results);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPhotoCollections(searchInput);
  };

  return (
    <div className="mx-auto my-4 w-[32rem]">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium sr-only"
        ></label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="w-6" />
          </div>
          <input
            type="search"
            id="default-search"
            className="outline-slate-500 border rounded-lg border-gray-300 p-4 pl-10 block w-full text-sm text-slate-500  bg-gray-50 focus:ring-slate-500 focus:border-slate-500 "
            placeholder="Search high-resolution images"
            required
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-slate-500 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
