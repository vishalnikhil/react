import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ Correct import

const Header = () => {
  const [btnName, setBtnName] = useState("LOGIN");
  const navigate = useNavigate(); // ✅ Correct usage of hook

  const change = () => {
    if (btnName === "LOGIN") {
      setBtnName("LOGOUT");
      navigate("/login"); // ✅ This will now work
    } else {
      setBtnName("LOGIN");
      navigate("/"); // ✅ Navigate back to home
    }
  };

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
        <Link to="/cart" className="px-4 py-2 rounded-lg hover:bg-amber-200 hover:shadow-md transition-all duration-200">
          Cart
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
