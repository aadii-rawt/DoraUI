import React, { useEffect, useState } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import ElementCard from "../components/Element/ElementCard";
import { ElementType } from "../utils/utils";
import axios from "../utils/axios";


const Elements: React.FC = () => {
  const [elements, setElements] = useState<ElementType[]>([])

  useEffect(() => {
    const fetchAllComponents = async () => {
      try {
        const response = await axios.get("/element");
        setElements(response.data);
      } catch (error) {
        console.error("Error fetching all components:", error);
      }
    };
    fetchAllComponents();
  }, []);


  return (
    <div className="flex-1 min-h-screen text-white px-4 py-5">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Browse all</h1>
        <p className="text-gray-400">Open-Source buttons made with CSS or Tailwind</p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-4 items-center justify-between mb-5">
        <span className="text-gray-400">First page</span>

        <div className="flex items-center gap-4">
          <button className="bg-[#1e1e1e] px-4 py-2 rounded-md text-white font-medium">All</button>
          <button className="text-blue-400"> Tailwind</button>
          <button className="text-blue-500"> CSS</button>

          <div className="flex items-center gap-2 ml-4">
            <FaFilter />
            <span>Sort: <span className="font-medium">Randomized</span> </span>
          </div>

          <span className="ml-4">Any Theme </span>

          <div className="ml-auto flex items-center bg-[#1e1e1e] px-3 py-2 rounded-md">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              placeholder="Search tags, users, posts..."
              className="bg-transparent outline-none text-sm placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {elements?.map((data) => (
          <ElementCard data={data} />
        ))}
      </div>
    </div>
  );
};

export default Elements;
