import React from "react";
import { styles } from "../styles";

import { navLinks } from "../constants/index";
import { logo2, menu, close } from "../assets";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";

const Navbar = () => {


  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  
  return (
    <>
      <nav
        className={`${styles.paddingX} w-full z-20 flex fixed top-0 items-center py-5 ${!scrolled?'bg-transparent':'bg-primary'} `}
      >
        <div className="flex justify-between items-center mx-auto w-full max-w-7xl">
          <Link
            to={"./"}
            className="flex justify-center items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logo2}
              alt="logo"
              className="w-10 h-10 rounded-full bg-white p-1 object-contain"
            />
            <p className="text-white text-[18px] font-bold cursor-pointer">
              Mohamed{' '} 
              <span className="hidden sm:inline-block">
                | Frontend Developer
              </span>
            </p>
          </Link>
          <ul className="list-none hidden sm:flex gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } font-medium text-[18px] hover:text-white cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className="sm:hidden flex justify-end items-center flex-1">
            <img
              src={!toggle ? menu : close}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                toggle ? "flex" : "hidden"
              } p-6 absolute black-gradient top-20 right-0 mx-4 my-2 z-10 rounded-xl min-w-[140px]`}
            >
              <ul className="list-none flex gap-4 flex-col justify-end items-start">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } font-poppins font-medium text-[16px] cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                  setToggle(!toggle)
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
