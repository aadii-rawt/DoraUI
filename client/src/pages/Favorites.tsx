import useAuthContext from '../context/userContext'
import axios from '../utils/axios'
import React, { useEffect, useState } from 'react'

const Favorites: React.FC = () => {

    const [favoritePosts, setFavoritePosts] = useState([])
    const [loading, setLoading] = useState(false)
    const { user } = useAuthContext()
    const fetchFavoritePosts = async () => {
        if (!user) return
        try {
            const res = await axios.get("/element/favorites")
            console.log(res);
        } catch (error) {

        }
    }
    useEffect(() => {
        fetchFavoritePosts()
    }, [user])

    return (
        <div className="flex-1 min-h-screen text-white px-4 py-5">
            <div className="mb-8">
                <h1 className="text-4xl font-bold">My Favorites</h1>
            </div>

        </div>
    )
}

export default Favorites