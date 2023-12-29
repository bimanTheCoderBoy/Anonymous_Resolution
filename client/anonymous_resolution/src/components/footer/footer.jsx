"use client";
import styles from "./footer.module.css";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { FaCreativeCommonsSamplingPlus } from "react-icons/fa";
import { SiHomeassistant } from "react-icons/si";

export default function Component() {
  return (
    <div className="flex justify-around items-center absolute bottom-0 left-0 right-0 bg-white dark:bg-slate-900 shadow-lg  h-16 rotate-180 rounded-b-[16px]">
      <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="avatar of Jese" className="rotate-180 border-4 rounded-full dark:border-zinc-300 border-[#0EBCB2] scale-[.85]"  rounded />
      <FaCreativeCommonsSamplingPlus className="rotate-180 scale-[2] text-[#0EBCB2] dark:text-zinc-200 "/>
      <SiHomeassistant className="rotate-180 scale-150 text-[#0EBCB2] dark:text-zinc-200"/>

    </div>
  );
}
