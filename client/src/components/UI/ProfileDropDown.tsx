import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { ConfigProvider, Dropdown, Space, theme } from 'antd';
import userContext from "../../context/userContext";
import { IoIosArrowDown } from 'react-icons/io';
import { LuUser } from 'react-icons/lu';
import { IoBookmarkOutline } from 'react-icons/io5';
import { GoGear } from 'react-icons/go';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import axios from 'axios';


const ProfileDropDown: React.FC = () => {
    const { user, setUser } = userContext()

    const logout = async () => {
        try {
            await axios.get("http://localhost:5000/auth/logout", {
                withCredentials: true,
            });
            setUser(null); // clear user from context
        } catch (err) {
            console.error("Logout failed", err);
        }
    };

    const items: MenuProps['items'] = [
    {
        label: (
            <Link to="/profile" className='flex
            gap-3 items-center' >
                <LuUser size={18} />   Your Profile
            </Link>
        ),
        key: '0',
    },
    {
        label: (
            <Link to="/profile" rel="noopener noreferrer" className='flex
            gap-3 items-center'>
                <IoBookmarkOutline size={18} />  Your Fevourite
            </Link>
        ),
        key: '1',
    },
    {
        label: (
            <Link to="/setting/profile" className='flex
            gap-3 items-center'>
                <GoGear size={18} />   Setting
            </Link>
        ),
        key: '2',
    },
    {
        type: 'divider',
    },
    {
        label: (
            <button className='flex
            gap-3 items-center text-red-500' onClick={logout}>
                <FiLogOut size={18} /> Logout
            </button>
        ),
        key: '3',
    },
];

    return (
        <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
            <Dropdown className='cursor-pointer hover:bg-secondary py-1 px-1 pl-3 rounded-lg' menu={{ items }} trigger={['click']} >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <IoIosArrowDown />
                        <p>{user?.username}</p>
                        <img src="https://i.pinimg.com/564x/c0/c0/f3/c0c0f3824805ad8075e555b41aeda59e.jpg" alt="user profile"
                            className='w-10 h-10 rounded-md' />
                    </Space>
                </a>
            </Dropdown>
        </ConfigProvider>
    )
}
export default ProfileDropDown;