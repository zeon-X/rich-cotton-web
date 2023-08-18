import Image from "next/image";
import React from "react";
import { logo } from "../../public";

const Nav = () => {
  return (
    <div className="w-full flex flex-col ">
      <div className="w-full shadow bg-white flex items-center lg:h-[86px] md:h-[76px] sm:h-[66px]">
        <div className="max-w-[1190px] w-full mx-auto lg:px-6 md:px-4 sm:px-3 flex justify-between items-center  ">
          <nav className="flex justify-between items-center w-full">
            <div className="flex gap-2 items-center">
              <Image
                src={logo}
                height={70}
                width={60}
                alt=""
                className="lg:block sm:hidden"
              />
              <Image
                src={logo}
                height={50}
                width={40}
                alt=""
                className="lg:hidden sm:block"
              />
              <p className="text-mgreen lg:text-3xl sm:text-xl font-extrabold">
                Rich Cotton Ltd.
              </p>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                <li>
                  <a href="#home">Home</a>
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
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
