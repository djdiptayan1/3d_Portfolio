import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import dj_orange from "../assets/DJ_orange.jpeg";
import dj_white from "../assets/DJ_white.png";
import "../Cursor.css"

const Navbar2 = () => {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState("");
    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 bg-primary bg-opacity-60 backdrop-blur-sm`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2 nav-cursor"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src={dj_white} alt="logo" className="w-9 h-9 object-contain" />
                    <p className="text-white text-[18px]">Diptayan Jash</p>
                </Link>
                <ul className="nav-cursor list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((Link) => (
                        <li
                            key={Link.id}
                            className={`${active === Link.title ? "text-white" : "text-secondary"
                                }
                                hover:text-white text-[18px] font-medium nav-cursor`}
                        >
                            <a className="nav-cursor" href={`#${Link.id}`}>{Link.title}</a>
                        </li>
                    ))}
                </ul>
                {/* MOBILE NAV */}
                <ul className="sm:hidden flex flex-1 justify-end items-center transition-all duration-500 ease-in">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-7 h-7 nav-cursor object-contain"
                        onClick={() => setToggle(!toggle)}
                    />
                    <div
                        className={`bg-primary outline-dashed outline-white bg-opacity-90 ${!toggle ? "hidden" : "flex"} transition-all duration-500 ease-in p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl glass-effect`}
                    >
                        <ul
                            className="list-none flex justify-end items-start flex-col gap-4">
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${active === link.title ? "text-white" : "text-secondary"
                                        } font-poppins font-medium nav-cursor text-[16px]`}
                                    onClick={() => {
                                        setToggle(false); // Close the menu
                                        setActive(link.title);
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar2;
