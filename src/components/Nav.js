import Image from "next/image";
import React from "react";
import { logo } from "../../public";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="w-full flex flex-col border-b">
      <div className="w-full  bg-white flex items-center lg:h-[86px] md:h-[76px] sm:h-[66px]">
        <div className="max-w-[1190px] w-full mx-auto lg:px-6 md:px-4 sm:px-3 flex justify-between items-center  ">
          <nav className="flex justify-between items-center w-full">
            <Link href={"/"}>
              {" "}
              <div className="flex gap-4 items-center">
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
                <div>
                  <p className="text-mgreen lg:text-2xl sm:text-xl font-semiboldd">
                    Rich Cotton Limited
                  </p>
                  <p className="text-mgreenn lg:text-xs  sm:text-xs uppercase tracking-widest ">
                    Fashion whereever you go
                  </p>
                </div>
              </div>{" "}
            </Link>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                <li>
                  <a href="/#home">Home</a>
                </li>
                <li>
                  <a href="/#about">About Us</a>
                </li>
                <li>
                  <a href="/#product">Product</a>
                </li>
                <li>
                  <a href="/#client">Clients</a>
                </li>
                <li>
                  <a href="/#service">Services</a>
                </li>
                <li>
                  <a href="/#team">Team</a>
                </li>
                <li>
                  <a href="/#contact">Contact</a>
                  {/* <Link href={"/#contact"}/> */}
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
