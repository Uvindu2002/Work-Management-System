import React from "react";
import { FaPhone, FaEnvelope, FaInfoCircle, FaQuestionCircle, FaClipboardCheck } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between p-8 bg-gradient-to-r from-[#0A354C] to-[#4B9CD3] text-white border-t border-gray-400">
      <div className="flex-1 mx-4 mb-6 md:mb-0">
        <h4 className="font-bold text-xl mb-4 underline">Services</h4>
        <ul className="list-none p-0 space-y-2">
          {["Auto Assist", "Meet Assist", "Shop Mart", "Event Minder", "Health Mate", "Finance Guard", "Pay Track", "Event Planner"].map(service => (
            <li key={service} className="flex items-center hover:text-blue-300 transition duration-300 cursor-pointer">
              <FaClipboardCheck className="mr-2" />
              {service}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 mx-4 mb-6 md:mb-0">
        <h4 className="font-bold text-xl mb-4 underline">Contact Us</h4>
        <ul className="list-none p-0 space-y-2">
          <li className="flex items-center hover:text-blue-300 transition duration-300 cursor-pointer">
            <FaPhone className="mr-2" />
            0716718281
          </li>
          <li className="flex items-center">
            <FaEnvelope className="mr-2" />
            Email:{" "}
            <a href="mailto:lifest@conts.lk" className="text-blue-300 hover:underline">
              lifest@conts.lk
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 mx-4 mb-6 md:mb-0">
        <h4 className="font-bold text-xl mb-4 underline">Life Style Planner</h4>
        <ul className="list-none p-0 space-y-2">
          {["About Us", "FAQ", "Privacy Policy", "Terms and Conditions"].map(item => (
            <li key={item} className="flex items-center hover:text-blue-300 transition duration-300 cursor-pointer">
              <FaInfoCircle className="mr-2" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
