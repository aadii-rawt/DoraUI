import React, { useState } from 'react'
import { ElementType } from '../utils/utils'

type PropType = {
  element: ElementType,
}

const CodePreview : React.FC<PropType> = ({ element }) => {
  const [bgColor, setBgColor] = useState<string>(element?.backgroundColor || "#fff")
  return (
    <div style={{ background: bgColor }} className="relative rounded-l-xl flex justify-center items-center min-h-[300px]">
      <iframe
        title="preview"
        className="w-full h-[calc(100vh-160px)]"
        srcDoc={`<html>
                <head>
                   ${element.isTailwind ? '<script src="https://cdn.tailwindcss.com"></script>' : ''}
                      <style>
                        html, body { height: 100%; margin: 0; display: flex; align-items: center; justify-content: center; }
                        ${!element.isTailwind ? element.css : ""}
                      </style>
                </head>
                <body>${element.html}</body>
              </html>`}
      />
      <div className="absolute top-2 right-2 flex  items-center gap-3">
        <h1 className="font-medium">{bgColor}</h1>
        <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="border-2 border-white w-8 h-8 outline-none rounded-md p-0 m-0 bg-transparent" />
      </div>
    </div>
  )
}

export default CodePreview
