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
const items: MenuProps['items'] = [
    {
        label: (
            <a href="https://www.antgroup.com" className='flex
            gap-3 items-center' target="_blank" rel="noopener noreferrer">
             <LuUser size={18}/>   Your Profile
            </a>
        ),
        key: '0',
    },
    {
        label: (
            <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer" className='flex
            gap-3 items-center'>
              <IoBookmarkOutline  size={18}/>  Your Fevourite
            </a>
        ),
        key: '1',
    },
    {
        label: (
            <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer" className='flex
            gap-3 items-center'>
             <GoGear size={18} />   Setting
            </a>
        ),
        key: '2',
    },
    {
        type: 'divider',
    },
    {
        label: (
            <button rel="noopener noreferrer" className='flex
            gap-3 items-center text-red-500'>
               <FiLogOut size={18} /> Logout
            </button>
        ),
        key: '3',
    },
];

const ProfileDropDown: React.FC = () => {
    const { user } = userContext()
    return (
        <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
            <Dropdown className='cursor-pointer hover:bg-secondary bg-secondary py-1 px-1 pl-3 rounded-lg' menu={{ items }} trigger={['click']} >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <IoIosArrowDown />
                        <p>{user.name}</p>
                        <img src="https://i.pinimg.com/564x/c0/c0/f3/c0c0f3824805ad8075e555b41aeda59e.jpg" alt="user profile"
                            className='w-10 h-10 rounded-md' />
                    </Space>
                </a>
            </Dropdown>
        </ConfigProvider>
    )
}
export default ProfileDropDown;