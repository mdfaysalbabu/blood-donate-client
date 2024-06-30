import { Donor } from "@/types";
import Link from "next/link";
import DonarInfoCard from "./DonarInfoCard";
import SearchButton from "./SearchButton";

const SearchDonar = async () => {
  const res = await fetch(
    "https://blood-donation-app-server-two.vercel.app/api/donors",

    {
      cache: "no-store",
    }
  );
  const { data: donors } = await res.json();

  return (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-r from-red-600 to-indigo-600 mt-6 px-10 py-8 rounded-lg shadow-lg text-white text-center">
        <h1 className="text-4xl md:text-4xl lg:text-4xl font-semibold my-6">
          Search Donor Here!
        </h1>
        <SearchButton />
      </div>
      <div className="my-12 text-center divider divider-error">
        <h1 className="text-2xl font-bold border-2 border-red-700 text-red-700 p-3 inline-block bg-white bg-opacity-75">
          Our Available Donors
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6 mx-12">
        {donors?.slice(0, 10).map((donor: Donor) => (
          <DonarInfoCard key={donor.id} donor={donor}></DonarInfoCard>
        ))}
      </div>
      <div>
        <Link href="/donors">
          <button className="btn text-white bg-red-700 font-bold">
            View All Donors
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchDonar;
