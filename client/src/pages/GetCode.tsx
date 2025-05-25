import React, { useState } from "react";
import { FaArrowLeft, FaRegCopy } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Preview from "../components/Preview";
import CodeEditor from "../components/CodeEditor";

const GetCode: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const [element,setElement] = useState(location.state.data || {})
  return (
    <div className="flex-1 min-h-screen text-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2">
          <FaArrowLeft />
          <span className="text-sm font-medium cursor-pointer">Go back</span>
        </button>
        <div className="flex items-center gap-2">
        <p className="capitalize">{element.type} by</p>
        <div className="flex items-center text-black dark:text-white hover:bg-secondary p-1 rounded-md">
          <img src={element.author.avatar} className="w-8 h-8 rounded" alt={element.author.username + "avatar"} />
          <h1 className="px-1.5">{element.author.username}</h1>
        </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 overflow-hidden bg-[#1a1a1a] rounded-xl">
        {/*=============== preview of code ==========================*/}
        <Preview element={element} />

        {/*=================== code ======================================*/}
        <div className=" text-left rounded-xl  relative">
          {/* <div className="flex items-center bg-[#292929] p-2 justify-between ">
            <div className="flex items-center gap-2 font-semibold text-sm">
              <span className="text-red-500">HTML</span> + <span className="text-blue-400">TailwindCSS</span>
            </div>
            <FaRegCopy className="text-gray-400 cursor-pointer" />
          </div> */}
            <CodeEditor setElement={setElement} element={element} />
        </div>
      </div>

      <div className="flex justify-between items-center mt-6 text-sm text-gray-400 border-t border-[#333] pt-4">
        <div className="flex items-center gap-2">
          <span>86</span>
          <span>Save to favorites</span>
        </div>
        <div className="flex gap-4">
          <button className="px-3 py-1 bg-[#1f1f1f] rounded-md">Copy to Figma</button>
          <button className="px-3 py-1 bg-[#1f1f1f] rounded-md">Export</button>
          <button className="px-3 py-1 bg-[#1f1f1f] rounded-md">React ⌄</button>
          <button className="px-3 py-1 bg-[#1f1f1f] rounded-md">Maximize</button>
        </div>
      </div>
    </div>
  );
};

export default GetCode;
