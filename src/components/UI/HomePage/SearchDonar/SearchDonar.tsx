const SearchDonar = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold my-6 text-red-600 text-center">
        Search Donor Here!
      </h1>
      <div className="join flex flex-col md:flex-row md:items-center mb-6">
        <div className="mb-2 md:mb-0">
          <input
            className="input input-bordered join-item"
            placeholder="Search"
          />
        </div>
        <div className="mb-2 md:mb-0">
          <label htmlFor="genre" className="sr-only">
            Select Genre
          </label>
          <select id="genre" className="select select-bordered join-item">
            <option disabled selected>
              Filter
            </option>

            <option>Blood Type</option>
            <option>Location</option>
            <option>Availability</option>
          </select>
        </div>
        <div>
          <button className="btn bg-red-700 text-white font-bold join-item">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchDonar;
