"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchButton = () => {
  const [filterType, setFilterType] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const router = useRouter();

  const onSearchHandler = () => {
    router.push(`/donors?filterType=${filterType}&filterValue=${filterValue}`);
  };

  return (
    <div className="join flex flex-col md:flex-row md:items-center mb-6 gap-4">
      <div className="relative w-full md:w-auto">
        <input
          className="input input-bordered join-item py-3 px-5 w-full md:w-64 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Search"
          onChange={(e) => setFilterValue(e.target.value)}
        />
      </div>
      <div className="relative w-full md:w-auto">
        <label htmlFor="filter" className="sr-only">
          Select Filter
        </label>
        <select
          id="filter"
          className="select select-bordered join-item py-3 px-5 w-full md:w-48 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option disabled selected>
            Filter
          </option>
          <option value="bloodType">Blood Type</option>
          <option value="location">Location</option>
          <option value="availability">Availability</option>
          <option value="searchTerm">Search Term</option>
        </select>
      </div>
      <div className="relative w-full md:w-auto">
        <button
          className="btn bg-green-700 text-white font-bold join-item py-3 px-6 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={onSearchHandler}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchButton;
