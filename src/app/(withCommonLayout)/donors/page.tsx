"use client";

import DonarInfoCard from "@/components/UI/HomePage/SearchDonar/DonarInfoCard";
import { useGetAllDonorsQuery } from "@/redux/api/donorsApi";
import { Donor } from "@/types";

const DonorsListPage = () => {
  const { data: donors, isLoading, isError, error } = useGetAllDonorsQuery([]);
  //   console.log(donors);
  return (
    <div className="flex flex-col items-center">
      <div className=" mt-6 ">
        <h1 className="text-4xl md:text-4xl lg:text-4xl font-semibold my-6 text-red-600 text-center">
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
      <div className="my-12 text-center divider divider-error">
        <h1 className="text-2xl font-bold border-2 border-red-700 text-red-700 p-3 inline-block bg-white bg-opacity-75">
          Our Available Donors
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6 mx-12">
        {donors?.map((donor: Donor) => (
          <DonarInfoCard key={donor.id} donor={donor}></DonarInfoCard>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default DonorsListPage;
