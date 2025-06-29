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
  type: string,
  backgroundColor: string,
  isTailwind: Boolean,
  source: string,
  status: string,
  title: string,
  description: string,
  html: string,
  css: string,
  author: String,
  bookmark: Number,
  createdAt: String,
}

export interface User {
  displayName: String;
  name?: string;
  email?: string;
  avatar?: string;
  _id?: string | any;
  favorites: [] | any;
  location: String;
  bio: String;
  company: String;
  twitter: String;
  website: String;
}

export function formatDate(timestamp) {
  const date = new Date(timestamp);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}