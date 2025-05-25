import React from 'react'
import { FaBookmark } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { ElementType } from '../../utils/utils';

type PropType = {
    btn: ElementType
}

const ElementCard: React.FC<PropType> = ({ data }) => {

    const navigate = useNavigate()

    const handleGetCode = (data: ElementType): void => {
        navigate(`/${data?.uid}/${data.id}`, {
            state: {
                data: data
            }
        });
    };

    return (
        <div key={data.id} className="">
            <div style={{ background: data?.backgroundColor || "#fff" }} className=' p-2 rounded-lg relative min-h-[200px] flex items-center justify-center group'>
                {/* <div className="mb-4" dangerouslySetInnerHTML={{ __html: data.preview }}></div> */}
                <iframe
                    title="preview"
                    className="w-full h-[calc(100vh-300px)]"
                    srcDoc={`<html>
                <head>
                   ${data.isTailwind ? '<script src="https://cdn.tailwindcss.com"></script>' : ''}
                      <style>
                        html, body { height: 100%; margin: 0; display: flex; align-items: center; justify-content: center; }
                        ${!data.isTailwind ? data.css : ""}
                      </style>
                </head>
                <body>${data.html}</body>
              </html>`}
                />
                <button onClick={() => handleGetCode(data)} className=" items-center gap-2 cursor-pointer absolute bottom-2 right-2 hidden duration-1000 transition-opacity group-hover:flex">
                    <span className='bg-primary px-1.5 py-1 rounded text-sm'>Get code</span>
                </button>
            </div>

            <div className="w-full text-left text-sm flex justify-between items-center my-1.5">
                <p className="text-white font-medium">{data.user}</p>
                <div className="flex items-center gap-1 ">
                    <button> <FaBookmark /></button>
                    <span className='text-gray-400'>{data.bookmarks}</span>
                </div>
            </div>
        </div>
    )
}

export default ElementCard
