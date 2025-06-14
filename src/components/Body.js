import React, { useState } from "react";
import Restlist from "../utlis/Restlist";

const Stylecard = {
  background: "#fff7e3",
};

const RestCard = ({ resname, cuisine, img, stars }) => {
  return (
    <div className="rescard" style={Stylecard}>
      <img className="img" src={img} />
      <h3 className="resname">{resname}</h3>
      <h4>{cuisine}</h4>
      <h4>{stars}</h4>
      <h4>29 minutes</h4>
    
    </div>

  );

};


const Body = () => {

//1st is usued to use the variable and set is used to update the variable or object



  const [restaurants, setRestaurants] = useState(Restlist);


 
  const handleFilter = ()=>{

       setRestaurants(restaurants.filter(k=>k.stars>=4.0));

  };

  

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleFilter}>
          TOP RATED RESTRAUNT NEAR YOU
        </button>
      </div>

      <div className="rest-container">
        {restaurants.map((res, index) => (
          <RestCard
            key={index}
            resname={res.resname}
            cuisine={res.cuisine}
            img={res.img}
            stars={res.stars}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
