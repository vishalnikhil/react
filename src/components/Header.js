
import { useState } from "react";

import { Link } from "react-router-dom";

  // console.log("something else was also called");

const Header= ()=>{

    // console.log("header called")

    //this is a power varibale that gives us the variable as well as a function than can change it and when it is changed the component
    //rerenders with the new value of updated value  hence the header component will be re rendered 

   const [btnName, setBtnName] = useState("LOGIN");

  let change= () => {
    setBtnName(btnName === "LOGIN" ? "LOGOUT" : "LOGIN");
  };

     return(
           
          <div className="header">

            {/* logo */}

            <div className="logo">

                  <img className="img-logo" src="https://marketplace.canva.com/EAFaFUz4aKo/3/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg"></img>

            </div>



            {/* navbar */}


            <div className="navbar">

                <ul className="navitems" >
                     
                    <li className="navlist">

                      <Link to="/">Home</Link>


                    </li>
                    <li className="navlist">

                      <Link to='/about'>About us</Link>
                      
                      
                      </li>
                    <li > 
                    <Link to="/Contact"> Contact us </Link> </li>



                    <li className="navlist">
                      
                      <Link to="#api">Cart</Link>
                      
                      </li>
                    <button className="login" onClick={change} >{btnName}</button>
                    
                </ul>


            </div>


          </div>
     )

}
export default Header;