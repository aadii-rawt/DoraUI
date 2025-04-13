import { JSX } from "react";
import { BsGrid, BsInputCursor } from "react-icons/bs";
import { CgPlayButtonR } from "react-icons/cg";
import { FaToggleOff } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import { IoMdRadioButtonOn } from "react-icons/io";
import { IoCheckboxOutline, IoDocumentOutline } from "react-icons/io5";

type MenuType = {
    icon: JSX.Element,
    label: string,
    route: string
}

export const menuItems: MenuType[] = [
    { icon: <BsGrid />, label: "All", route: "/elements" },
    { icon: <CgPlayButtonR />, label: "Buttons", route: "/button" },
    { icon: <IoCheckboxOutline />, label: "Checkboxes", route: "/checkbox" },
    { icon: <FaToggleOff />, label: "Toggle switches", route: "/toggle" },
    { icon: <IoDocumentOutline />, label: "Cards", route: "/cards" },
    { icon: <FiLoader />, label: "Loader", route: "/loader" },
    { icon: <BsInputCursor />, label: "Input", route: "/input" },
    { icon: <IoMdRadioButtonOn />, label: "Radio", route: "/radio" },
];

export type ElementType = {
    id: string | number,
    preview: string,
    user: string,
    previewBackground?: string,
    views: string,
    bookmarks?: string | number,
    comments: number,

}