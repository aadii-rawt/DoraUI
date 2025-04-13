import React from "react";
import { BsGrid } from "react-icons/bs";
import { CiGrid42 } from "react-icons/ci";
const Sidebar : React.FC = () => {
  const menuItems = [
    { icon: <BsGrid /> , label: "All" },
    { icon: "", label: "Buttons" },
    { icon: "" , label: "Checkboxes" },
    { icon: "", label: "Toggle switches" },
    { icon: "", label: "Cards" },
  ];

  return (
    <div className="w-56 bg-primary text-white p-4 space-y-2">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center space-x-3 px-4 py-3 rounded-md cursor-pointer  hover:bg-[#1E1E1E] transition"
        >
          {item.icon}
          <span className="text-sm">{item.label}</span>
        </div>
      ))}
      {/* Chevron (optional, but hidden as requested) */}
      <div className="flex items-center space-x-3 px-4 py-2 rounded-md opacity-0 pointer-events-none">
   
        <span className="text-sm">Hidden Arrow</span>
      </div>
    </div>
  );
};

export default Sidebar;
