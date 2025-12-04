import React, { useState, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const FlyToLocation = ({ coords }) => {
  const map = useMap();

  if (coords) {
    map.flyTo(coords, 10, { duration: 1.5 });
  }

  return null;
};

const Coverage = () => {
  const position = [23.810332, 90.412518];
  const serviceCenters = useLoaderData();

  const [searchText, setSearchText] = useState("");
  const [targetCoords, setTargetCoords] = useState(null);
  const popupRef = useRef([]);

  const handleSearch = () => {
    if (!searchText.trim()) return;

    const match = serviceCenters.find(
      (item) =>
        item.district.toLowerCase().includes(searchText.toLowerCase()) ||
        item.covered_area.some((area) =>
          area.toLowerCase().includes(searchText.toLowerCase())
        )
    );

    if (!match) {
      alert("No district or area found!");
      return;
    }

    const coords = [Number(match.latitude), Number(match.longitude)];

    setTargetCoords(coords);

    // Auto open popup
    const index = serviceCenters.indexOf(match);
    setTimeout(() => {
      if (popupRef.current[index]) {
        popupRef.current[index].openPopup();
      }
    }, 600);
  };

  return (
    <div className="bg-[#FFFFFF] rounded-2xl my-10 px-6 md:p-20 md:px-32">
      <h1 className="font-extrabold text-5xl py-3 text-[#03373d] pb-12">
        We are available in 64 districts
      </h1>

      {/* SEARCH BOX */}
      <div className="flex items-center w-full max-w-lg border border-gray-100 shadow rounded-full px-4 py-2 gap-3">
        <input
          type="text"
          placeholder="Search here"
          className="grow outline-none bg-transparent text-gray-700"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-[#A6CE39] hover:bg-[#8DB82F] text-black font-semibold px-6 py-2 rounded-full cursor-pointer"
        >
          Search
        </button>
      </div>

      <div className="border-t border-gray-200 my-12"></div>

      <h2 className="font-bold text-3xl mb-5 text-[#03373d]">
        We deliver almost all over Bangladesh
      </h2>

      {/* MAP */}
      <div className="w-full min-h-screen">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          className="w-full min-h-screen rounded-xl"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Auto fly to searched location */}
          <FlyToLocation coords={targetCoords} />

          {serviceCenters.map((center, index) => (
            <Marker
              key={index}
              position={[center.latitude, center.longitude]}
              ref={(el) => (popupRef.current[index] = el)}
            >
              <Popup>
                <strong>{center.district}</strong> <br />
                Service Area: {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
