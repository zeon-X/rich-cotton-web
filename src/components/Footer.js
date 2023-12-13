import Image from "next/image";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer>
      <div className="bg-green w-full px-4 mt-24">
        <div className="max-w-[1190px] mx-auto lg:px-0 md:px-2 sm:px-2 py-10 text-white flex justify-between items-center">
          <p className="text-[12px]">
            Copyright © {currentYear} Rich Cotton Ltd. | Developed By{" "}
            <a target="_blank" href="http://www.aleehatech.com">
              AleehaTech
            </a>
          </p>

          <div className="flex gap-3">
            <a target="_balnk" href="facebook.com">
              <Image
                src={"https://i.ibb.co/GJMBMrR/fb.png"}
                height={20}
                width={20}
                alt="fb"
              />
            </a>
            <a target="_balnk" href="facebook.com">
              <Image
                src={"https://i.ibb.co/HpWSLHk/insta.png"}
                height={20}
                width={20}
                alt="fb"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
