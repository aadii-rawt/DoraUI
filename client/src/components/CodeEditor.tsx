import { Editor } from '@monaco-editor/react'
import React, { useState } from 'react'
import { ElementType } from '../utils/utils'
import { FaRegCopy } from 'react-icons/fa'
type PropType = {
    btnData: ElementType
    setElement: React.Dispatch<any>
}
const CodeEditor: React.FC<PropType> = ({ element, setElement }) => {
    const [currentTab, setCurrentTab] = useState<string>("html")
    return (
        <div className="flex h-full flex-col bg-[#1e1e1e]">
            <div className="flex justify-between items-center bg-[#292929] px-4 pt-2.5 text-sm font-medium">
                {!element.isTailwind ?
                    <div className="flex items-center gap-1">
                        <button onClick={() => setCurrentTab("html")} className={`px-2 py-1.5 w-40 text-left rounded-t-md flex items-center gap-1 ${currentTab === "html" ? "bg-[#1E1E1E]" : "bg-[#171717]"}`}><img src="https://img.icons8.com/color/200/html-5.png" alt="html icon" className="w-5" /> HTML</button>
                        <button onClick={() => setCurrentTab("css")} className={`px-2 py-1.5 w-40 text-left rounded-t-md bg-[#171717] flex items-center gap-1 ${currentTab == "css" ? "bg-[#1E1E1E]" : "bg-[#171717]"}`}> <img src="https://img.icons8.com/fluent/512/css3.png" alt="css icon" className="w-5" />CSS</button>
                    </div> :
                    <div>
                        <button className="px-2 py-1.5 w-60 text-left rounded-t-md bg-[#1E1E1E] flex items-center gap-2"><img src="https://img.icons8.com/color/200/html-5.png" alt="html icon" className="w-5" /> HTML  +  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png" alt="" className="w-5" /> TailwindCSS</button>
                    </div>
                }
                <FaRegCopy  className="text-gray-400 cursor-pointer" />
            </div>
            {/* Monaco Editor */}
            <div className="flex-1">
                <Editor
                    height="100%"
                    language={currentTab == "css" ? "css" : "html"}
                    theme="vs-dark"
                    value={currentTab == "css" ? element.css : element.html}
                    // onChange={(value) => setFormdata((prev) => ({ ...prev, [currentTab]: value }))}
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
    )
}

export default CodeEditor
