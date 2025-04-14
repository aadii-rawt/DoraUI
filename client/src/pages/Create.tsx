import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const Create : React.FC = () => {
  const [code, setCode] = useState<string>(
    `<button class="bg-blue-500 text-white px-4 py-2 rounded">Click Me</button>`
  );

  return (
    <div className="flex w-full h-screen bg-black text-white">
      {/* Preview */}
      <div className="w-1/2 bg-white p-4 overflow-auto rounded-l-xl">
        <iframe
          title="preview"
          className="w-full h-full border-none"
          srcDoc={`<html><head><script src="https://cdn.tailwindcss.com"></script></head><body>${code}</body></html>`}
        />
      </div>

      {/* Editor */}
      <div className="w-1/2 bg-[#1e1e1e] p-4">
        <div className="text-sm mb-2 text-white font-medium">
          HTML + <span className="text-sky-400">TailwindCSS</span>
        </div>
        <Editor
          height="90%"
          language="html"
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value ?? "")}
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            wordWrap: "on",
            tabSize: 2,
          }}
        />
      </div>
    </div>
  );
};

export default Create;
