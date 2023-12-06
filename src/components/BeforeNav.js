import React from "react";

const BeforeNav = () => {
  // [#F9F9F9] text-[#C2C2C2]"
  return (
    <div className="w-full bg-[#c2c2c212] lg:flex md:hidden sm:hidden items-center h-[30px] ">
      <div className="max-w-[1190px] w-full mx-auto lg:px-6 md:px-4 sm:px-3 flex justify-between items-center">
        <p></p>
        <p className="flex gap-4 text-[12px] text-gray-400">
          <a href="tel:+8801715865149" className="flex gap-1 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span>+8801715865149</span>
          </a>
          <a
            href="mail:info@richcotton.net"
            className="flex gap-1 items-center"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
              </svg>
            </span>{" "}
            <span>info@richcotton.net</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default BeforeNav;
