import { Bars3CenterLeftIcon } from '@heroicons/react/16/solid';
import React, { useEffect, useState } from 'react';
import Link from "next/link";

interface Props {
    openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
    const [navSticky, setNavSticky] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) {
                setNavSticky(true);
            }
            if (window.scrollY <= 90) {
                setNavSticky(false);
            }
        };
        window.addEventListener("scroll", handler);
    }, []);

    const stickyStyle = navSticky ? "bg-gray-900 shadow-gray-300 shadow-sm" : "";

    return (
        <div className={`fixed w-[100%] bg-gray-900 ${stickyStyle} transition-all duration-300 z-[1000]`}>
            <div className="flex items-center h-[12vh] justify-between w-[80%] mx-auto">
                <div className="font-logo text-white text-[18px]">
                    <span className="text-[30px] md:text-[40px] text-white">Darshan Kasundra</span>
                </div>
                <ul className="md:flex hidden items-center space-x-10">
                    <li><Link className="text-white relative group" href="/">
                        Home
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                    </Link></li>
                    <li><Link className="text-white relative group" href="/experience">
                        Experience
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                    </Link></li>
                    <li><Link className="text-white relative group" href="/projects">
                        Projects
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                    </Link></li>
                    <li><Link className="text-white relative group" href="/skills">
                        Skills
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                    </Link></li>
                    <li><Link className="text-white relative group" href="/contact">
                        Contact
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                    </Link></li>
                </ul>
                <Bars3CenterLeftIcon onClick={openNav} className="w-[2.3rem] md:hidden h-[2.3rem] text-blue-500 rotate-180" />
            </div>
        </div>
    );
};

export default Nav;