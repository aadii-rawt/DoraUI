import React from "react";
import { menuItems } from "../utils/utils";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {

  return (
    <div className="w-56 max-h-screen bg-primary text-white p-4 space-y-2 sticky top-0 left-0">
      {menuItems.map((item, index) => (
        <NavLink
          to={item.route}
          key={index}
          className={(({ isActive }) => ` ${isActive && "bg-[#1E1E1E]"} flex text-white text-xl items-center space-x-3 px-4 py-3 rounded-md cursor-pointer hover:bg-[#1E1E1E] transition`)}>
          {item.icon}
          <span className="text-sm">{item.label}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
