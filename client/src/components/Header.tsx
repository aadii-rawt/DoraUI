import React from "react";
import { FaRocket, FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import userContext from "../context/userContext";
import ProfileDropDown from "./UI/ProfileDropDown";

const Header: React.FC = () => {
  const { showSigninModal, setShowSigninModal, user, setUser } = userContext()

  const navigate = useNavigate()

  const handleCreate = () => {
    if (!user) {
      setShowSigninModal(true)
      return
    }
    navigate("/create")
  }


  return (
    <header className="w-full px-6 py-4 flex justify-between items-center bg-primary">
      <div className="flex items-center space-x-8">
        <Link to="/" className="text-white font-bold text-2xl">
          Dora<span className="text-[#7C3AED]">UI</span>
        </Link>
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
        <button onClick={handleCreate} className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium rounded-md hover:opacity-90 transition">
          <FaPlus className="text-sm" />
          <span>Create</span>
        </button>
        {user ?
          <ProfileDropDown /> :
          <button onClick={() => setShowSigninModal(true)} className="flex items-center space-x-2 px-4 py-2 bg-[#1F1F1F] text-white font-medium rounded-md hover:bg-[#2a2a2a] transition">
            <FaRocket className="text-sm" />
            <span>Join the Community</span>
          </button>
        }
      </div>
    </header>
  );
};

export default Header;
