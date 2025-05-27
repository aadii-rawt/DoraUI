import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ElementCard from './Element/ElementCard';

export const UserPost: React.FC = ({ userId  }) => {
    const [elements, setElements] = useState([])

    useEffect(() => {
        const getUserPost = async () => {
            if (!userId) {
                return
            }
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/element/${userId}`);
                console.log(response.data);
                setElements(response.data)
            } catch (error) {
                console.error("Error fetching components:", error);
            }
        };
        getUserPost()
    }, [userId])

    return (
        <div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-5">
                {elements?.map((data) => (
                    <ElementCard data={data} />
                ))}
            </div>
        </div>
    )
}
