import React from "react";
import Nav from "./Nav";
import { logo } from "../../public";
import Image from "next/image";
import BeforeNav from "./BeforeNav";
import Footer from "./Footer";

const Drawer = ({ children }) => {
  return (
    <div className="drawer">
      <input id="drawer_nav_bar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <BeforeNav />
        <div className="w-full sticky top-0 z-50 bg-base-300">
          <Nav />
        </div>
        {/* Page content here */}
        {children}
        <Footer />
      </div>
      <div className="drawer-side">
        <label htmlFor="drawer_nav_bar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-white shadow">
          {/* Sidebar content here */}

          <div class="flex gap-2 items-center mb-6 ml-4">
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
            <p className="text-mgreen lg:text-3xl md:text-xl lg:block md:block sm:hidden font-extrabold">
              Rich Cotton Ltd.
            </p>
          </div>

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
    </div>
  );
};

export default Drawer;
