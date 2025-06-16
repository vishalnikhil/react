import React, { useState, useEffect } from "react";
import Restlist from "../utlis/Restlist";
import Shimmer from "./Shimmer";

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


  var arr=[1,2,3,4,5];
   
//   console.log(arr);

//    function func(x){
//       return x*2;
       
//    }

//   var nw=arr.map(func);
//   console.log(nw);

//   this is how map works


//    console.log(arr);

//     function func(x){
//           return (x&1);
//     }

//    var nw=arr.filter(func);

//     console.log(nw);

//     this is how filter works it filters some specific value


    



const Body = () => {

    // useEffect(()=>{

    //      console.log("useEffect called")

    // }); //passing an empty array doest not allows usefeect to get called again and agin it will only be claeed once in the start

    // console.log("body got rendered due to input");   
 
//1st is usued to use the variable and set is used to update the variable or object
 const [restaurants, setRestaurants] = useState(Restlist);
//    useEffect(()=>{
//            fetchData();
//         },[]); //takes two arguments // call back function and an array this will be called after your component renders

        //  console.log("body rendered")

        // const fetchData= async ()=>{

        //      const data= await fetch(
        //          "#api"
        //      )

if(restaurants.length===0){
      console.log("no restraunts found")

      alert("no restraunts found")

    //in this case you can show some messages on the screen

      //
};

        //    const json = await data.json();

        // //    setRestaurants(json)

        // };

       
        
        //first the body is rendered and then the useEffect is called


  const handleFilter = ()=>{

       setRestaurants(restaurants.filter(k=>k.stars>=4.0));

  };



  const [searchtext,setsearchtext]=useState("");

   


  return (
    <div className="body">

         
      <div className="filter">

        <input placeholder="find restraunt"  value={searchtext} onChange={(e)=>{
               setsearchtext(e.target.value);
        }}/>
        <button className="filter-btn" onClick={()=>{
      
          //filter the rest cards and update ui

          console.log(searchtext)
          //aab yeh list of rest ko update krna parega


          const filtered_val=Restlist.filter((res)=>res.resname.toLowerCase().includes(searchtext.toLowerCase()));

          setRestaurants(filtered_val);




          //hence aab mere ps jo search text aaya h wo search text variable m store ho ja rha hai

          //now changes lane ke liye fn likhne parega
          

        }}>search</button>

         
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
