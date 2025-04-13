import React, { useState } from 'react'

const Preview: React.FC = ({ btnData }) => {
    const [bgColor, setBgColor] = useState<string>(btnData?.previewBackground || "#fff")
    return (
        <div style={{ background: bgColor }} className="relative rounded-l-xl flex justify-center items-center min-h-[300px]">
            <div dangerouslySetInnerHTML={{ __html: btnData.preview }}></div>
            <div className="absolute top-2 right-2 flex  items-center gap-3">
                <h1 className="font-medium">{bgColor}</h1>
                <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="border-2 border-white w-8 h-8 outline-none rounded-md p-0 m-0 bg-transparent" />
            </div>
        </div>
    )
}

export default Preview
