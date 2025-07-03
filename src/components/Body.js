import React, { useState } from "react";
import Restlist from "../utlis/Restlist";

const RestCard = ({ resname, cuisine, img, stars,delivery_time }) => {
  return (
    <div className="bg-white rounded-xl p-4 w-72 shadow-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300 hover:bg-amber-50">
      <img
        className="w-full h-40 object-cover rounded-md"
        src={img}
        alt={resname}
      />
      <h3 className="text-lg font-semibold mt-3 text-pink-400">{resname}</h3>
      <h4 className="text-gray-600">{cuisine}</h4>
      <h4 className="text-yellow-500 font-medium">⭐ {stars}</h4>
      <h4 className="text-gray-500 text-sm">⏱ {delivery_time} minutes</h4>
    </div>
  );
};

const Body = () => {
  const [restaurants, setRestaurants] = useState(Restlist);
  const [searchtext, setsearchtext] = useState("");

  const handleFilter = () => {
    setRestaurants(restaurants.filter((k) => k.stars >= 4.0));
  };

  const handleSearch = () => {
    const filtered_val = Restlist.filter((res) =>
      res.resname.toLowerCase().includes(searchtext.toLowerCase())
    );
    setRestaurants(filtered_val);
  };

  return (
    <div className="bg-amber-50 min-h-screen">
      {/* Search & Filter */}
      <div className="flex flex-wrap items-center justify-center gap-4 px-6 py-8">
        <input
          className="border-2 border-amber-300 rounded-lg px-4 py-2 w-60 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
          placeholder="Find restaurant"
          value={searchtext}
          onChange={(e) => setsearchtext(e.target.value)}
        />
        <button
          className="px-5 py-2 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 hover:shadow-md transition-all duration-300"
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className="px-5 py-2 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 hover:shadow-md transition-all duration-300"
          onClick={handleFilter}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* No Results Message */}
      {restaurants.length === 0 ? (
        <p className="text-center text-red-500 font-semibold text-lg mt-8">
          🚫 No restaurants found.
        </p>
      ) : (
        <div className="flex flex-wrap justify-center gap-8 px-6 pb-10">
          {restaurants.map((res, index) => (
            <RestCard
              key={index}
              resname={res.resname}
              cuisine={res.cuisine}
              img={res.img}
              stars={res.stars}
              delivery_time={res.delivery_time}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
