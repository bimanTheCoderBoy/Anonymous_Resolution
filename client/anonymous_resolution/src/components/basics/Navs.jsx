// import { Avatar } from "flowbite-react";
import { FaCreativeCommonsSamplingPlus } from "react-icons/fa";
import { SiHomeassistant } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MdAddCircleOutline } from "react-icons/md";

const Navs = () => {
   
    const location = useLocation();
    const [active, setActive] = useState(0);
    const setting = () => {
        switch (location.pathname) {
            case '/':
                setActive(0);
                break;
            case '/add-post':
                setActive(1)
                break;
            case '/profile':
                setActive(2)
                break;
            default:
                setActive(0);
                break;
        }
    }
    useEffect(() => {
        setting();
    }, [location]);
    return (
        <>
            <div className="bg-white sticky bottom-0 left-0 right-0 dark:bg-slate-900 h-16 border-t-2 shrink-0 flex justify-center items-center border-top-width: 2px">
                <NavLink to="/" className="text-2xl text-gray-500 dark:text-zinc-200 grow flex justify-center" >
                    {
                        active === 0 ? <SiHomeassistant className="text-primary-50 shadow-lg shadow-cyan-500/50" /> : <SiHomeassistant className="" />
                    }
                </NavLink>
                <NavLink to="/add-post" className="text-2xl text-gray-500  dark:text-zinc-200 grow flex justify-center" >
                    {
                        active === 1 ? <MdAddCircleOutline className="text-primary-50" /> : <MdAddCircleOutline />
                    }
                </NavLink>
                <NavLink to="/profile" className="text-2xl text-gray-500 dark:text-zinc-200 grow flex justify-center" >
                    {
                        active === 2 ? <CgProfile className="text-primary-50 " />
                            : <CgProfile />
                    }
                </NavLink>
                {/* <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="avatar of Jese" className="border-4 rounded-full dark:border-zinc-300 border-[#0EBCB2] scale-[.85]" rounded />
                 */}
            </div>
        </>
    )
}
export default Navs;