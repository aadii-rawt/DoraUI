import React from "react";
import { FaRocket, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center bg-primary">
      <div className="flex items-center space-x-8">
        <h1 className="text-white font-bold text-2xl">
          Dora<span className="text-[#7C3AED]">UI</span>
        </h1>
        <nav className="flex items-center space-x-6 text-white font-medium">
          <Link to='/elements' className="relative group">
            <button className="bg-[#1F1F1F] px-4 py-2 rounded-md">Elements ▾</button>
          </Link>
          <a href="#" className="hover:underline">Challenges</a>
          <a href="#" className="hover:underline">Inspiration</a>
          <a href="#" className="hover:underline">Blog</a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium rounded-md hover:opacity-90 transition">
          <FaPlus className="text-sm" />
          <span>Create</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 bg-[#1F1F1F] text-white font-medium rounded-md hover:bg-[#2a2a2a] transition">
          <FaRocket className="text-sm" />
          <span>Join the Community</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
