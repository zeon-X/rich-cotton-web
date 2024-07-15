import Image from "next/image";
import React from "react";
import { logo } from "../../public";
import Link from "next/link";
import parentCategory from "../../public/assets/data/parentCategory";

const Nav = () => {
  return (
    <div className="w-full flex flex-col border-b">
      <div className="w-full  bg-white flex items-center lg:h-[92px] md:h-[76px] sm:h-[66px]">
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
              <ul className="menu menu-horizontal text-[12px]">
                <li>
                  <Link href="/#home">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="flex justify-center items-center"
                  >
                    <p>Products</p>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3  p-2 shadow border w-[220px]"
                  >
                    {parentCategory?.map((x, index) => {
                      return (
                        <li key={index} className=" w-[220px]">
                          <Link
                            href={`/products/${x?.link}`}
                            style={{
                              height: "70px",
                              width: "200px",
                              // padding: "8px",
                              display: "flex",
                              // justifyContent: "center",
                              justifyItems: "center",
                            }}
                          >
                            <Image src={x?.img} height={50} width={60} alt="" />
                            <span className="text-xs">{x?.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>

                {/* <li tabIndex={0}>
                  <details>
                    <summary>Products</summary>
                    <ul className="p-2 shadow border">
                      {parentCategory?.map((x, index) => {
                        return (
                          <li key={index} className=" w-[220px]">
                            <Link
                              href={`/products/${x?.link}`}
                              style={{
                                height: "70px",
                                width: "220px",
                                padding: "8px",
                                display: "flex",
                                // justifyContent: "center",
                                justifyItems: "center",
                              }}
                            >
                              <Image
                                src={x?.img}
                                height={60}
                                width={70}
                                alt=""
                              />
                              <span>{x?.title}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </details>
                </li> */}
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
                  <Link target="_blank" href="https://richcottonapparels.net/">
                    Factory
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className="lg:hidden sm:block">
            <label
              htmlFor="drawer_nav_bar"
              className="btn btn-square btn-ghost"
            >
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
