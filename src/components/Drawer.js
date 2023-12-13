import React from "react";
import Nav from "./Nav";
import { logo } from "../../public";
import Image from "next/image";
import BeforeNav from "./BeforeNav";
import Footer from "./Footer";
import Link from "next/link";
import parentCategory from "../../public/assets/data/parentCategory";

const Drawer = ({ children }) => {
  return (
    <div className="drawer">
      <input id="drawer_nav_bar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {/* Navbar */}
        <BeforeNav />
        <div id="sticky" className="w-full sticky top-0 z-50  bg-base-300">
          <Nav />
        </div>

        {/* Page content here */}
        <div className=" overflow-x-hidden">{children}</div>

        <Footer />
      </div>
      <div className="drawer-side z-50">
        <label htmlFor="drawer_nav_bar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-white shadow">
          {/* Sidebar content here */}

          <div className="flex gap-2 items-center mb-6 ml-4">
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
            <Link href="/#home">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>

          <li tabIndex={0}>
            <details>
              <summary>Products</summary>
              <ul className="p-2">
                {parentCategory?.map((x, index) => {
                  return (
                    <li key={index}>
                      <Link href={`/products/${x?.link}`}>{x?.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </details>
          </li>
          <li>
            <Link href="/#client">Clients</Link>
          </li>
          <li>
            <Link href="/#service">Services</Link>
          </li>
          <li>
            <Link href="/#team">Team</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
          <li>
            <a target="_blank" href="https://richcottonapparels.net/">
              Factory
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
