import React from 'react'
import { FaBookmark } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { ElementType } from '../../utils/utils';

type PropType = {
    btn : ElementType
}

const ElementCard: React.FC<PropType> = ({ btn }) => {

    const navigate = useNavigate()

    const handleGetCode = (btn: ElementType) : void => {
        navigate(`/${btn.user}/${btn.id}`, {
            state: {
                data: btn
            }
        });
    };

    return (
        <div key={btn.id} className="">
            <div style={{background : btn?.previewBackground || "#fff"}} className=' p-2 rounded-lg relative min-h-[200px] flex items-center justify-center group'>
                <div className="mb-4" dangerouslySetInnerHTML={{ __html: btn.preview }}></div>
                <button onClick={() => handleGetCode(btn)} className=" items-center gap-2 cursor-pointer absolute bottom-2 right-2 hidden duration-1000 transition-opacity group-hover:flex">
                    <span className='bg-primary px-1.5 py-1 rounded text-sm'>Get code</span>
                </button>
            </div>


            <div className="w-full text-left text-sm flex justify-between items-center my-1.5">
                <p className="text-white font-medium">{btn.user}</p>
                <div className="flex items-center gap-1 ">
                    <button> <FaBookmark /></button>
                    <span className='text-gray-400'>{btn.bookmarks}</span>
                </div>
            </div>
        </div>
    )
}

export default ElementCard
