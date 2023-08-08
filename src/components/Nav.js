import Image from "next/image";
import React from "react";
import { logo } from "../../public";

const Nav = () => {
  return (
    <div className="w-full flex flex-col " id="sticky">
      <div className="w-full bg-[#F9F9F9] lg:flex md:hidden sm:hidden items-center h-[40px] ">
        <div className="max-w-[1190px] w-full mx-auto lg:px-6 md:px-4 sm:px-3 flex justify-between items-center">
          <p className="flex gap-4 text-sm text-[#C2C2C2]">
            <a href="tel:+8801715865149">+8801715865149</a>
            <a href="mail:info@richcotton.net">info@richcotton.net</a>
          </p>
        </div>
      </div>

      <div className="w-full shadow flex items-center h-[96px]">
        <div className="max-w-[1190px] w-full mx-auto lg:px-6 md:px-4 sm:px-3 flex justify-between items-center  ">
          <nav className="flex justify-between items-center w-full">
            <Image src={logo} height={70} width={60} alt="" />
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#product">Product</a>
                </li>
                <li>
                  <a href="#client">Clients</a>
                </li>
                <li>
                  <a href="#service">Services</a>
                </li>
                <li>
                  <a href="#team">Team</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="lg:hidden sm:block">
            <label for="drawer_nav_bar" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
