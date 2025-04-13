import React, { useState } from "react";
import { FaArrowLeft, FaRegCopy } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Preview from "../components/Preview";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const GetCode: React.FC = () => {
  const location = useLocation();
  const { data: btnData } = location.state || {};
  const navigate = useNavigate()
  return (
    <div className="flex-1 min-h-screen text-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2">
          <FaArrowLeft />
          <span className="text-sm font-medium cursor-pointer">Go back</span>
        </button>
        <div className="flex items-center gap-4 text-black dark:text-white">
          <h1>Button by {btnData.user}</h1>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 overflow-hidden bg-[#1a1a1a] rounded-xl">
        {/*=============== preview of code ==========================*/}
        <Preview btnData={btnData} />
        {/*=================== code ======================================*/}
        <div className="bg-black text-left rounded-xl  relative">
          <div className="flex items-center bg-[#292929] p-2 justify-between ">
            <div className="flex items-center gap-2 font-semibold text-sm">
              <span className="text-red-500">HTML</span> + <span className="text-blue-400">TailwindCSS</span>
            </div>
            <FaRegCopy className="text-gray-400 cursor-pointer" />
          </div>
          <div className="max-h-[360px] overflow-y-scroll">
            <SyntaxHighlighter
              language="html"
              style={dracula}
              showLineNumbers
              wrapLines
            >
              {btnData.preview}
            </SyntaxHighlighter>
          </div>
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
