import React, { useState, useEffect } from "react";
import Homeimg from "../assets/home_icon.svg";
import applyimg from "../assets/apply_icon.png";
import aboutimg from "../assets/about_icon.svg";
import contactimg from "../assets/contact_icon.svg";
import dj_orange from "../assets/DJ_orange.jpeg";
import dj_white from "../assets/DJ_white.png";

const InstagramNavbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Set the threshold width for mobile view

  const [openNav, setOpenNav] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Update the state based on the screen width
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    // Render the mobile navigation bar
    return (
      <>
        <div className="relative">
          <a
            href="#"
            className="w-screen text-2xl font-bold fixed top-0 bg-opacity-70 backdrop-blur-sm z-10 text-white flex justify-center"
          >
            Diptayan Jash
          </a>
        </div>
        <div className="relative">
          <nav className="fixed bottom-0 w-full bg-opacity-70 backdrop-blur-sm z-10">
            <div className="flex justify-between mx-4 p-2">
              <a href="#" className="p-1">
                <img src={Homeimg} alt="Home" className="w-6 h-6 invert" />
              </a>
              <a href="#about" className="p-1">
                <img src={aboutimg} alt="About" className="w-6 h-6 invert" />
              </a>
              <a href="#apply" className="p-1">
                <img src={applyimg} alt="Apply" className="w-6 h-6 invert" />
              </a>
              <a href="#footer" className="p-1">
                <img src={contactimg} alt="Apply" className="w-6 h-6 invert" />
              </a>
            </div>
          </nav>
        </div>
      </>
    );
  } else {
    // Render the desktop navigation bar
    return (
      <>
        <nav className="fixed bg-blue-gray-900 bg-opacity-70 backdrop-blur-sm text-white py-2 top-0 z-10 w-screen">
          <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="text-3xl font-bold flex justify-center">
              Diptayan Jash
            </a>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-500">
                  About
                </a>
              </li>
              <li>
                <a href="#apply" className="hover:text-blue-500">
                  Apply
                </a>
              </li>
              <li>
                <a href="#footer" className="hover:text-blue-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
};

export default InstagramNavbar;

<div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
  <div className="flex bg-white bg-opacity-20 w-fit px-1.25 py-1.25 shadow-box-up rounded-2xl dark:bg-box-dark dark:shadow-box-dark-out">
    <div className="dark:shadow-buttons-box-dark rounded-2xl w-full px-1.5 py-1.5 md:px-3 md:py-3">
      <a
        className="text-light-blue-light hover:text-black dark:text-gray-400 border-2 inline-flex items-center mr-4 last-of-type:mr-0 p-2.5 border-transparent bg-light-secondary shadow-button-flat-nopressed hover:border-2 hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0"
        title="Go to the home page"
        href="/"
      >
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
        </svg>
      </a>
      <a
        className="text-light-blue-light hover:text-black dark:text-gray-400 border-2 inline-flex items-center mr-4 last-of-type:mr-0 p-2.5 border-transparent bg-light-secondary shadow-button-flat-nopressed hover:border-2 hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0"
        title="Go to post list page"
      >
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"></path>
          <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"></path>
        </svg>
      </a>
      <a
        className="text-light-blue-light hover:text-black dark:text-gray-400 border-2 inline-flex items-center mr-4 last-of-type:mr-0 p-2.5 border-transparent bg-light-secondary shadow-button-flat-nopressed hover:border-2 hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0"
        title="Go to about me page"
      >
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            fillRule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</div>;
