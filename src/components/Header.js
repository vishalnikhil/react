import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"; // ✅ Correct import

const Header = () => {
  const [btnName, setBtnName] = useState("LOGIN");
  const navigate = useNavigate(); // ✅ Correct usage of hook

 const change = () => {
  if (btnName === "LOGIN") {
    navigate("/login");      // ① go to login first
    setBtnName("LOGOUT");    // ② then flip text
  } else {
    // here you’d clear your auth state, too, in a real app
    navigate("/");
    setBtnName("LOGIN");
  }
};


  //we will be using selector to read data from redux store right

  //subscribing to the store using selector

  //this is a hook

   const cartItems=useSelector((store)=>store.cart.items);

    console.log(cartItems);

    //i can use this cart items to create the cart page 



  return (
    <div className="flex justify-between items-center px-8 py-4 bg-amber-100 shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Link to={"/"}>
          <img
            className="h-20 w-auto rounded-xl shadow-sm"
            src="https://marketplace.canva.com/EAFaFUz4aKo/3/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg"
            alt="Logo"
          />
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-6 text-gray-800 font-medium">
        <Link to="/" className="px-4 py-2 rounded-lg hover:bg-amber-200 hover:shadow-md transition-all duration-200">
          Home
        </Link>
        <Link to="/about" className="px-4 py-2 rounded-lg hover:bg-amber-200 hover:shadow-md transition-all duration-200">
          About Us
        </Link>
        <Link to="/contact" className="px-4 py-2 rounded-lg hover:bg-amber-200 hover:shadow-md transition-all duration-200">
          Contact Us
        </Link>
        <Link to="/cart" className="px-4 py-2 rounded-lg hover:bg-amber-200 hover:shadow-md transition-all duration-200 font-bold text-xl">
          Cart-{cartItems.length}  
          {/* aab yeha actual length aarray dikhega hmne intially 2 chiz dala that to lenght 2 hai avi array ka */}
        </Link>

        <button
          className="ml-4 bg-white text-gray-800 font-semibold py-2 px-6 rounded-xl shadow hover:bg-amber-50 hover:shadow-lg hover:scale-105 transition-transform duration-300"
          onClick={change}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

 

export default Header;
