import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { FaRegCopy } from "react-icons/fa";
import { BsMoon } from "react-icons/bs";

const Create = () => {
  const [code, setCode] = useState<string>(
    `<button class="button">Button</button>`
  );
  const [bgColor, setBgColor] = useState<string>("#e8e8e8");

  return (
    <div className="min-h-screen p-6 bg-[#111]">
      <div className="bg-[#1a1a1a] rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* === Left Preview Pane === */}
        <div style={{ background: bgColor }} className="relative min-h-[400px] flex items-start justify-center rounded-l-xl">
          {/* Iframe Preview */}
          <iframe
            title="preview"
            className="w-full h-[calc(100vh-160px)]"
            srcDoc={`<html>
                <head>
                  <script src="https://cdn.tailwindcss.com"></script>
                  <style>html, body { height: 100%; margin: 0; display: flex; align-items: center; justify-content: center; }</style>
                </head>
                <body>${code}</body>
              </html>`}
          />

          {/* Color + Toggles */}
          <div className="absolute top-2 right-2 flex items-center gap-2">
            <span className=" font-medium text-slate-900 text-xl">{bgColor}</span>
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="w-6 h-6 rounded-md border border-white bg-transparent cursor-pointer"
            />
          </div>
        </div>
        {/* === Right Editor Pane === */}
        <div className="flex flex-col bg-[#1e1e1e]">
          {/* Editor Header */}
          <div className="flex justify-between items-center bg-[#292929] px-4 py-2 text-sm font-medium">
            <span className="flex items-center gap-1">
              <span className="text-red-500">HTML</span> +{" "}
              <span className="text-blue-400">CSS</span>
            </span>
            <FaRegCopy className="text-gray-400 cursor-pointer" />
          </div>

          {/* Monaco Editor */}
          <div className="flex-1">
            <Editor
              height="100%"
              language="html"
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value ?? "")}
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                wordWrap: "on",
                tabSize: 2,
                scrollbar: { vertical: "hidden", horizontal: "hidden" },
              }}
            />
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="mt-5 flex  items-center justify-end gap-4 bg-secondary p-2 rounded-xl">
        <button className=" text-white px-4 py-2 rounded-md text-lg hover:bg-gray3rd">
          Save as a draft
        </button>
        <button className="bg-[#4E46E5] hover:bg-[#4E46E5] text-white px-4 py-2 rounded-md text-lg">
          Submit for review
        </button>
      </div>
    </div>
  );
};

export default Create;
