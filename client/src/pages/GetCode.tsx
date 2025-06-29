import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaRegCopy } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CodeEditor from "../components/CodeEditor";
import CodePreview from "../components/CodePreview";
import UserContext from "../context/userContext";
import { formatDate } from "../utils/utils";
import { CiCalendar, CiWarning } from "react-icons/ci";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import axios from "axios";
axios.defaults.withCredentials = true

const GetCode: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const [element, setElement] = useState(location.state.data || {})
  const { user, setShowSigninModal } = UserContext()
  const [isFavorite, setIsFavorite] = useState(false)

  // console.log(user);

  useEffect(() => {
    const isFavorite = user?.favorites?.includes(element?._id)
    setIsFavorite(isFavorite)
  }, [element, user])


  const handleFavorites = async () => {
    if (!user) {
      return setShowSigninModal(true)
    }
    try {
      await axios.post(`http://localhost:5000/api/v1/element/${element._id}/favorite`);
      setIsFavorite(prev => !prev);
    } catch (err) {
      console.error("Failed to toggle save", err);
    }
  }

  return (
    <div className="flex-1 min-h-screen text-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2">
          <FaArrowLeft />
          <span className="text-sm font-medium cursor-pointer">Go back</span>
        </button>
        <div className="flex items-center gap-2">
          <p className="capitalize">{element.type} by</p>
          <div className="flex items-center text-black dark:text-white hover:bg-secondary p-1 rounded-md">
            <img src={element.author.avatar} className="w-8 h-8 rounded" alt={element.author.username + "avatar"} />
            <h1 className="px-1.5">{element.author.username}</h1>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 overflow-hidden bg-third rounded-xl">
        {/*=============== preview of code ==========================*/}
        <CodePreview element={element} />

        {/*=================== code ======================================*/}
        <div className=" text-left rounded-xl  relative">
          {/* <div className="flex items-center bg-[#292929] p-2 justify-between ">
            <div className="flex items-center gap-2 font-semibold text-sm">
              <span className="text-red-500">HTML</span> + <span className="text-blue-400">TailwindCSS</span>
            </div>
            <FaRegCopy className="text-gray-400 cursor-pointer" />
          </div> */}
          <CodeEditor setElement={setElement} element={element} />
        </div>
      </div>

      <div className="flex justify-between items-center mt-6 text-sm rounded-lg bg-secondary p-2">
        <div>
          <button onClick={handleFavorites} className="p-2 rounded-md hover:bg-gray3rd flex items-center font-medium gap-2 text-[16px]"> {isFavorite ?  <BsBookmarkFill size={24} />  :  <><BsBookmark size={24} /> Save to favorites</> }</button>

        </div>
      </div>

      <div className="flex min-h-screen text-white mt-10 gap-8">
        {/* Left Column */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4 ">
            <h2 className=" text-gray-400">Comments</h2>
            {!user && <p className="text-gray-400"><button className="text-white" onClick={() => setShowSigninModal(true)}>Log in</button> to add comments</p>}
          </div>
          <div className="flex items-center bg-third p-2 rounded-xl mb-6">
            {user && <img
              src={user?.avatar} // Replace with real avatar
              alt="User Avatar"
              className="w-10 h-10 rounded-lg mr-3"
            />}
            <input
              type="text"
              placeholder="Send a first comment..."
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
            />
            <button className="ml-3 bg-[#5b4bdb] px-6 py-2 rounded-lg text-white font-medium">
              Send
            </button>
          </div>

          {/* No Variations Box */}
          <div className="border border-dashed border-gray-600 rounded-lg h-48 flex items-center justify-center text-gray-400">
            <span className="text-center">+ No variations yet, create one!</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-72">
          <h2 className="text-2xl font-bold mb-2 capitalize">{element.type}</h2>
          <div className="flex items-center justify-between text-gray-400 mb-4">
            <div className="flex items-center gap-2">
              <CiCalendar size={21} />
              {formatDate(element.createdAt)}
            </div>

            <button className="flex items-center gap-2 hover:text-white hover:bg-secondary p-2 px-4 rounded-lg">
              <CiWarning className="text-red-400" size={21} />
              <span className="font-semibold">Report</span>
            </button>
          </div>

          <hr className="border-gray-700 mb-4" />

          {/* User Info */}
          <div className="flex items-center">
            <Link to={`/${element.author.username}`}>
              <img
                src={element.author.avatar}
                alt="Author Avatar"
                className="w-12 h-12 rounded-lg mr-3"
              />
            </Link>
            <Link to={`/${element.author.username}`}>
              <p className="font-semibold text-lg">{element.author.username}</p>
              <p className="text-gray-400 text-sm">{element.author.displayName}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetCode;
