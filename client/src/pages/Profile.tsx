import React, { useEffect } from "react";
import {
  ClockCircleOutlined,
  CloseCircleOutlined,
  FolderOpenOutlined,
  FilterOutlined,
  DownOutlined
} from "@ant-design/icons";
import { GoCopy } from "react-icons/go";
import EmptyData from "../components/UI/EmptyData";
import userContext from "../context/userContext";
import axios from "axios";

const tabs = [
  { label: "Posts", active: true },
  { label: "Variations", icon: <GoCopy className="text-yellow-500" /> },
  { label: "Review", icon: <ClockCircleOutlined className="text-yellow-500" /> },
  { label: "Rejected", icon: <CloseCircleOutlined className="text-red-500" /> },
  { label: "Drafts", icon: <FolderOpenOutlined className="text-blue-500" /> },
];

const Profile: React.FC = () => {
  const { user } = userContext()

  useEffect(() => {
    console.log("fetching");
    
    const fetchUserComponents = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/element/${user?._id}`);
        console.log(response.data); 
        return response.data;
      } catch (error) {
        console.error("Error fetching components:", error);
      }
    };
    fetchUserComponents()
  }, [])

  return (
    <div className=" text-white p-6 w-full">
      <div className="flex items-center gap-4">
        <img
          src={user?.avatar || "https://i.pinimg.com/564x/c0/c0/f3/c0c0f3824805ad8075e555b41aeda59e.jpg"}
          alt="Profile"
          className="w-24 h-24 rounded-lg"
        />
        <div>
          <h1 className="text-2xl font-bold">{user?.displayName}</h1>
          <p className="text-gray-400">{user?.username}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-medium">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`flex items-center gap-3 px-3 py-2 rounded-md transition ${tab.active
              ? "bg-secondary text-white"
              : "text-white hover:bg-secondary"
              }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}

        <div className="flex items-center gap-2 ml-auto">
          <button className="flex items-center gap-1 px-3 py-1.5 text-gray-300 hover:bg-secondary rounded-lg">
            <FilterOutlined />
            Favorites
            <DownOutlined className="text-xs" />
          </button>
          <button className="flex items-center gap-1 px-3 py-1.5 text-gray-300 hover:bg-secondary rounded-lg">
            Any Theme
            <DownOutlined className="text-xs" />
          </button>
        </div>
      </div>

      <div>

        <EmptyData />
      </div>
    </div>
  );
};

export default Profile;
