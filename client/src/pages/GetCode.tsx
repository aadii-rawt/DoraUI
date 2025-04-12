import React from "react";
import { FaArrowLeft, FaRegCopy } from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom";

const GetCode : React.FC = () => {
    const location = useLocation();

    const {data} = location.state  || {}; 
  return (
    <div className="flex-1 min-h-screen text-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FaArrowLeft />
          <span className="text-sm font-medium cursor-pointer">Go back</span>
        </div>
        <div className="flex items-center gap-4 text-black dark:text-white">
          {/* <span className="text-sm bg-[#e8e8e8] text-black px-2 py-1 rounded">#e8e8e8</span>
          <FaRegMoon className="cursor-pointer" />
          <div className="w-5 h-5 border rounded cursor-pointer" /> */}
          <h1>Button by {btnData.user}</h1>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-6 bg-[#1a1a1a] p-4 rounded-xl">
        {/* Left Preview Box */}
        <div className="bg-[#e8e8e8] rounded-xl flex justify-center items-center min-h-[300px]">
          <button className="px-8 z-30 py-4 bg-rose-400 rounded-md text-white relative font-semibold text-2xl
              after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0
              after:translate-y-full after:rounded-md after:hover:scale-[3] after:hover:transition-all after:duration-700
              after:transition-all duration-700 hover:[text-shadow:3px_5px_2px_#be123c] text-shadow:2px_2px_2px_#fda4af">
            Hover Me
          </button>
        </div>

        {/* Right Code Box */}
        <div className="bg-black text-left p-4 rounded-lg relative">
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 font-semibold text-sm">
              <span className="text-red-500">HTML</span> + <span className="text-blue-400">TailwindCSS</span>
            </div>
            <FaRegCopy className="text-gray-400 cursor-pointer" />
          </div>
          {/* Code */}
          <pre className="overflow-x-auto text-sm text-orange-100">
{`<button class="px-8 z-30 py-4 bg-rose-400 rounded-md text-white relative font-semibold text-2xl
  after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0
  after:translate-y-full after:rounded-md after:hover:scale-[3] after:hover:transition-all after:duration-700
  after:transition-all duration-700 hover:[text-shadow:3px_5px_2px_#be123c] text-shadow:2px_2px_2px_#fda4af">
  Hover Me
</button>`}
          </pre>
        </div>
      </div>

      {/* Bottom Bar */}
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
