import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { FaRegCopy, FaRoad } from "react-icons/fa";
import { RxButton } from "react-icons/rx";
import { RiToggleLine } from "react-icons/ri";
import { IoMdCheckboxOutline, IoMdSwitch } from "react-icons/io";
import { FiLoader } from "react-icons/fi";
import { IoDocumentOutline } from "react-icons/io5";
import axios from "axios";
import useAuthContext from "../context/userContext";
import { ElementType } from "../utils/utils";
import CodePreview from "../components/CodePreview";

type TypeElement = {
  name: string,
  value: string,
  icon: any
}

const elementsTypes: TypeElement[] = [
  {
    name: "Button",
    value: "button",
    icon: <RxButton size={30} />
  },
  {
    name: "Toggle",
    value: "toggle",
    icon: <RiToggleLine size={30} />
  },
  {
    name: "Switch",
    value: "switch",
    icon: <IoMdSwitch size={30} />
  },
  {
    name: "Check Box",
    value: "checkbox",
    icon: <IoMdCheckboxOutline size={30} />
  },
  {
    name: "Loader",
    value: "loader",
    icon: <FiLoader size={30} />
  },
  {
    name: "Form",
    value: "form",
    icon: <IoDocumentOutline size={30} />
  },
]


const Create: React.FC = () => {

  const { user } = useAuthContext()
  const [code, setCode] = useState<string>(
    `<button class="button">Button</button>`
  );

  const [bgColor, setBgColor] = useState<string>("#e8e8e8");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const [currentTab, setCurrentTab] = useState<string>("html")

  const [formData, setFormdata] = useState<ElementType>({
    type: "button",
    backgroundColor: "",
    isTailwind: false,
    source: "",
    status: "",
    title: "",
    description: "",
    html: "",
    css: "",
    createdAt: Date.now()
  })

  const handleSubmit = async (): Promise<void> => {
    try {
      const payload = {
        ...formData,
        author: user?._id,
        createdAt: Date.now(),
        backgroundColor: bgColor == "#e8e8e8" ? "" : bgColor,
      }

      console.log(payload);
      const response = await axios.post("http://localhost:5000/api/v1/element/create", payload);
      console.log("Component saved:", response.data);
      alert("Component submitted successfully!");
    } catch (error: any) {
      console.error("Submission error:", error?.response?.data || error.message);
      alert("Failed to submit the component!");
    }
  };


  return (
    <div className="min-h-screen p-6 bg-[#111]">
      <div className="bg-[#1a1a1a] rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* === Left Preview Pane === */}
        <CodePreview element={formData} />

        {/* === Right Editor Pane === */}
        <div className="flex flex-col bg-[#1e1e1e]">
          {/* Editor Header */}
          <div className="flex justify-between items-center bg-[#292929] px-4 pt-2.5 text-sm font-medium">
            {!formData.isTailwind ?
              <div className="flex items-center gap-1">
                <button onClick={() => setCurrentTab("html")} className={`px-2 py-1.5 w-40 text-left rounded-t-md flex items-center gap-1 ${currentTab === "html" ? "bg-[#1E1E1E]" : "bg-[#171717]"}`}><img src="https://img.icons8.com/color/200/html-5.png" alt="html icon" className="w-5" /> HTML</button>
                <button onClick={() => setCurrentTab("css")} className={`px-2 py-1.5 w-40 text-left rounded-t-md bg-[#171717] flex items-center gap-1 ${currentTab == "css" ? "bg-[#1E1E1E]" : "bg-[#171717]"}`}> <img src="https://img.icons8.com/fluent/512/css3.png" alt="css icon" className="w-5" />CSS</button>
              </div> :
              <div>
                <button className="px-2 py-1.5 w-60 text-left rounded-t-md bg-[#1E1E1E] flex items-center gap-2"><img src="https://img.icons8.com/color/200/html-5.png" alt="html icon" className="w-5" /> HTML  +  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png" alt="" className="w-5" /> TailwindCSS</button>
              </div>
            }
            <FaRegCopy className="text-gray-400 cursor-pointer" />
          </div>

          {/* Monaco Editor */}
          <div className="flex-1">
            <Editor
              height="100%"
              language={currentTab == "css" ? "css" : "html"}
              theme="vs-dark"
              value={currentTab == "css" ? formData.css : formData.html}
              onChange={(value) => setFormdata((prev) => ({ ...prev, [currentTab]: value }))}
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
        <button onClick={handleSubmit} className="bg-[#4E46E5] hover:bg-[#4E46E5] text-white px-4 py-2 rounded-md text-lg">
          Submit for review
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-[#1a1a1a] rounded-xl p-6 w-[600px] max-w-[90%]">
            <h2 className="text-white text-2xl font-semibold mb-6 text-center">What are you making?</h2>
            <div className="grid grid-cols-3 gap-4 text-white">
              {elementsTypes.map((item, i) => (
                <button onClick={() => setFormdata((prev) => ({ ...prev, type: item.value }))} key={i} className={`p-4 rounded-lg border hover:border-[#4E46E5]  hover:bg-[#2a2a2a] text-center cursor-pointer flex items-center  gap-2 justify-center flex-col ${item.value === formData.type ? 'border-[#4E46E5] bg-[#2a2a2a] ' : 'border-gray-500/50'}`}>
                  {item.icon}
                  <div className="text-lg">{item.name}</div>
                </button>
              ))}
            </div>
            <div className="mt-6 flex justify-between items-center">
              <div className="flex gap-4">
                <button onClick={() => setFormdata((prev) => ({ ...prev, isTailwind: false }))} className={`px-3 py-1.5 flex items-center justify-center gap-2 border border-[#4E46E5] text-white rounded-md bg-[#1e1e1e] ${!formData.isTailwind ? 'border-[#4E46E5] bg-[#2a2a2a] ' : 'border-gray-500/50'}`}>
                  <img src="https://img.icons8.com/fluent/512/css3.png" alt="" className="w-5" />
                  <span>CSS</span>
                </button>
                <button onClick={() => setFormdata((prev) => ({ ...prev, isTailwind: true }))} className={`px-3 py-1.5 flex items-center justify-center gap-2 border  text-white rounded-md bg-[#1e1e1e] ${formData.isTailwind ? 'border-[#4E46E5] bg-[#2a2a2a] ' : 'border-gray-500/50'}`}>
                  <img src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-144x86-czphjb87.png" alt="" className="w-5" />
                  <span>Tailwind CSS</span>
                </button>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-[#4E46E5] text-white px-3 py-1.5 rounded-md"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Create;
