"use client";
import styles from "./footer.module.css";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { FaCreativeCommonsSamplingPlus } from "react-icons/fa";
import { SiHomeassistant } from "react-icons/si";
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default function Component({setTitle}) {
  return (
    <div className="flex justify-around items-center absolute bottom-0 left-0 right-0 bg-white dark:bg-slate-900 shadow-lg  h-16 rotate-180 rounded-b-[16px]">
    <Navbar className="w-full h-full px-8">
    <Navbar.Brand href="#"  >
        <Avatar onClick={()=>setTitle("Profile")} img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="avatar of Jese" className="rotate-180 border-4 rounded-full dark:border-zinc-300 border-[#0EBCB2] scale-[.85]" rounded />
    </Navbar.Brand>
    <Navbar.Brand href="#"  >

        <FaCreativeCommonsSamplingPlus onClick={()=>setTitle("Create Resolution")} className="rotate-180 scale-[2] text-[#0EBCB2] dark:text-zinc-200 " />
    </Navbar.Brand>
      
      
        <Navbar.Brand href="#"  >
    
      <SiHomeassistant onClick={()=>setTitle("Home")} className="rotate-180 scale-150 text-[#0EBCB2] dark:text-zinc-200" />
    </Navbar.Brand>
      
      </Navbar>
    </div>
  );
}
