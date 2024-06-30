import React from "react";
import Logo from "../assets/Logo.svg";
import MENUICON from "../assets/menuIcon.png";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between max-w-[311px] sm:max-w-[640px] md:max-w-[750px] lg:max-w-[1000px] xl:max-w-[1304px] mx-auto pt-[49px] md:pt-[64px] mb-[74px] md:mb-[88px]">
        <a href="/">
          <img src={Logo} className="md:w-[210px] w-[133px]" alt="ali invest logo" />
        </a>
        <div className="flex items-center gap-[24px] md:gap-[32px]">
          <select className="outline-none cursor-pointer text-[14px] md:text-[18px]">
            <option value="ru">RU</option>
            <option value="uz">UZ</option>
            <option value="en">EN</option>
          </select>
          <img src={MENUICON} className="md:w-[32px] w-[24px]" alt="hamburger menu" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
