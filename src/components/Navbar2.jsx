import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import dj_white from "../assets/DJ_white.png";
import "../Cursor.css"
import Inside_you from "../assets/Inside_you.mp3"
import Mouse_Click from "../assets/Mouse_Click.mp3"

const BoopButton = () => {
    const [audio] = useState(new Audio(Inside_you)); // Replace with the actual path to your audio file
    const [isPlaying, setIsPlaying] = useState(false);

    const PlayAudio = () => {
        audio.volume = 0.2;
        if (isPlaying) {
            audio.pause(); // Pause the audio if it's playing
        } else {
            audio.play(); // Play the audio if it's paused
        }
        setIsPlaying(!isPlaying);
    };
    useEffect(() => {
        // Play the audio when the component is mounted (page load)
        audio.volume = 0.2;
        audio.autoplay = true;
        audio.play();
        setIsPlaying(true);
    }, []); // The empty dependency array ensures this effect runs only once on component mount


    return (
        <div>
            <button onClick={PlayAudio} className="play-pause-button hover:text-white nav-cursor invert">
                {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                )}
            </button>
        </div>
    );
};

const Navbar2 = () => {
    // AUDIO PLAY
    const Play_click = () => {
        const audio = new Audio(Mouse_Click);
        audio.volume = 0.35;
        audio.play();
    };

    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState("");
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
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
                        Play_click();
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
                            onClick={() => {
                                setActive(Link.title);
                                Play_click();
                            }}
                        >
                            <a className="nav-cursor" href={`#${Link.id}`}>{Link.title}</a>
                        </li>
                    ))}
                    <BoopButton />
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
                                        Play_click();
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                            <BoopButton />
                        </ul>
                    </div>
                </ul>
            </div>
        </nav>

        // <nav
        //     className={`${styles.paddingX} px-6 w-full bg-primary flex flex-wrap items-center py-4 fixed top-0 bg-opacity-40 backdrop-blur-sm z-20`}
        // >
        //     <div className="w-full flex-1 justify-between items-center">
        //         <Link
        //             to="/"
        //             className="flex items-center gap-2 nav-cursor w-44"
        //             onClick={() => window.scrollTo(0, 0)}
        //         >
        //             <img src={dj_white} alt="logo" className="w-9 h-9 object-contain" />
        //             <p className="text-white text-[18px]">Diptayan Jash</p>
        //         </Link>
        //     </div>

        //     <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
        //         <img
        //             src={isMobileMenuOpen ? close : menu}
        //             alt="menu"
        //             className="w-7 h-7 nav-cursor object-contain"
        //             onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        //         />
        //     </label>
        //     <input className="hidden" type="checkbox" id="menu-toggle" />
        //     <AnimatePresence>
        //         {isMobileMenuOpen && (
        //             <motion.div
        //                 className="w-full"
        // initial={{ opacity: 0, y: -100 }}
        // animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0, y: -100 }}
        // transition={{ duration: 0.3 }}
        //             >
        //                 <ul className="nav-cursor text-xl text-center items-center gap-10 pt-4 lg:text-lg lg:flex lg:pt-0">
        //                     {navLinks.map((link) => (
        //                         <li
        //                             key={link.id}
        //                             className="text-white hover:text-white text-[18px] font-medium nav-cursor pb-4 lg:pb-0"
        //                         >
        //                             <a href={`#${link.id}`}>{link.title}</a>
        //                         </li>
        //                     ))}
        //                 </ul>
        //             </motion.div>
        //         )}
        //     </AnimatePresence>
        //     {/* Desktop menu */}
        //     <div className="hidden lg:flex items-center lg:items-center lg:w-auto w-full transition-all duration-500 ease-in justify-between max-w-7xl mx-auto " id="menu">
        //         <ul className=" text-xl text-center items-center gap-10 pt-4 lg:text-lg lg:flex lg:pt-0">
        //             {navLinks.map((link) => (
        //                 <li
        //                     key={link.id}
        //                     className="text-white hover:text-white text-[18px] font-medium nav-cursor pb-4 lg:pb-0"
        //                 >
        //                     <a className="nav-cursor" href={`#${link.id}`}>{link.title}</a>
        //                 </li>
        //             ))}
        //         </ul>
        //     </div>
        // </nav >

    );
};

export default Navbar2;