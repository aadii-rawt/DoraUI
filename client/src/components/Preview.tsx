import React, { useState } from 'react'
import { ElementType } from '../utils/utils'

type PropType = {
    btnData: ElementType
}

const Preview: React.FC<PropType> = ({ btnData }) => {
    const [bgColor, setBgColor] = useState<string>(btnData?.previewBackground || "#fff")
    return (
        <div style={{ background: bgColor }} className="relative rounded-l-xl flex justify-center items-center min-h-[300px]">
            <iframe
                title="preview"
                className="w-full h-full border-none"
                srcDoc={`<html>
                    <head>
                      <script src="https://cdn.tailwindcss.com"></script>
                      <style>body, html { margin: 0; padding: 0; height: 100%; }</style>
                    </head>
                    <body class="flex items-center justify-center w-full h-full">
                      ${btnData?.preview}
                    </body>
                  </html>`}
            />
            <div className="absolute top-2 right-2 flex  items-center gap-3">
                <h1 className="font-medium">{bgColor}</h1>
                <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="border-2 border-white w-8 h-8 outline-none rounded-md p-0 m-0 bg-transparent" />
            </div>
        </div>
    )
}

export default Preview
