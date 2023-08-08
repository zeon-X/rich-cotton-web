import React from "react";
import Nav from "./Nav";
import { logo } from "../../public";

const Drawer = ({ children }) => {
  return (
    <div className="drawer">
      <input id="drawer_nav_bar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full  bg-base-300">
          <Nav />
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="drawer_nav_bar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-white shadow">
          {/* Sidebar content here */}

          <div class="flex gap-2 items-center ">
            <img src={logo} class="mb-6" height="60" width="70" alt="" />
            <p class="text-[#128816] text-xl font-bold">Rich Cotton Ltd.</p>
          </div>

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
    </div>
  );
};

export default Drawer;
