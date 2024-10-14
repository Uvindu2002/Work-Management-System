import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpg";
import Profile from "../images/user.png";

function Nav() {
  return (
    <header className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-500 to-blue-300 shadow-lg">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-12 mr-3 rounded-lg shadow-md" />
        <h2 className="text-2xl font-extrabold text-white">Life Style Planner</h2>
      </div>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="text-white font-semibold hover:text-yellow-300 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-white font-semibold hover:text-yellow-300 transition duration-300">
              Services
            </Link>
          </li>
          <li>
            <Link to="/remainderlist" className="text-white font-semibold hover:text-yellow-300 transition duration-300">
              Reminders
            </Link>
          </li>
          <li>
            <Link to="/payments" className="text-white font-semibold hover:text-yellow-300 transition duration-300">
              Payments
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white font-semibold hover:text-yellow-300 transition duration-300">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center space-x-3 font-bold text-white">
        <div className="text-lg">Welcome! Abhilash</div>
        <img src={Profile} alt="Profile" className="w-12 h-12 rounded-full border-2 border-white shadow-md" />
      </div>
    </header>
  );
}

export default Nav;
