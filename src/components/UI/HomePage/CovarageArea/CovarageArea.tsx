"use client";

import { Donor } from "@/types";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const geocode = async (location: string) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${location}`
    );
    const data = await response.json();
    if (data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0].lon),
      };
    }
  } catch (error) {
    console.error("Geocoding error:", error);
  }
  return null;
};

const CovarageArea = () => {
  const [donors, setDonors] = useState<Donor[]>([]);
  const [locations, setLocations] = useState<{
    [key: string]: { lat: number; lon: number };
  }>({});
  const [position, setPosition] = useState<[number, number]>([20, 0]);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/donor-list?limit=1000"
        );
        const { data } = await res.json();
        setDonors(data);

        const newLocations = await Promise.all(
          data.map(async (donor: Donor) => {
            const locationData = await geocode(donor.location as string);
            if (locationData) {
              return {
                id: donor.id,
                location: donor.location,
                ...locationData,
              };
            }
            return null;
          })
        );

        const validLocations = newLocations
          .filter((loc) => loc !== null)
          .reduce((acc, loc) => {
            if (loc) {
              acc[loc.id] = loc;
            }
            return acc;
          }, {});

        setLocations(validLocations);

        const locationCount: { [key: string]: number } = {};
        newLocations.forEach((loc) => {
          if (loc) {
            locationCount[loc.location] =
              (locationCount[loc.location] || 0) + 1;
          }
        });

        const maxLocation = Object.keys(locationCount).reduce((a, b) =>
          locationCount[a] > locationCount[b] ? a : b
        );

        const maxLocationCoords = newLocations.find(
          (loc) => loc?.location === maxLocation
        );
        if (maxLocationCoords) {
          setPosition([maxLocationCoords.lat, maxLocationCoords.lon]);
        }
      } catch (error) {
        console.error("Error fetching donors:", error);
      }
    };

    fetchDonors();
  }, []);

  return (
    <div>
      {" "}
      <div className="my-12 text-center divider divider-error">
        <h1 className="text-2xl font-bold border-2 border-red-700 text-red-700 p-3 inline-block bg-white bg-opacity-75">
          Our Coverage Areas!
        </h1>
      </div>
      <div className="w-full h-96">
        <MapContainer
          center={position}
          zoom={5}
          scrollWheelZoom={false}
          className="h-full rounded-lg shadow-lg"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {donors.map((donor) => {
            const location = locations[donor.id];
            if (location) {
              return (
                <Marker key={donor.id} position={[location.lat, location.lon]}>
                  <Popup>
                    <div>
                      <h3 className="font-semibold">{donor.name}</h3>
                      <p>Blood Type: {donor.bloodType}</p>
                      <p>Location: {donor.location}</p>
                      <p>
                        Availability:{" "}
                        {donor.availability ? "Available" : "Not Available"}
                      </p>
                    </div>
                  </Popup>
                </Marker>
              );
            }
            return null;
          })}
        </MapContainer>
      </div>
    </div>
  );
};

export default CovarageArea;
