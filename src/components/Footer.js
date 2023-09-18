import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-mgreen w-full px-4 mt-24">
        <div className="max-w-[1190px] mx-auto lg:px-0 md:px-2 sm:px-2 py-10 text-white flex justify-between items-center">
          <p className="text-sm">
            Copyright © 2018 Rich Cotton Ltd. | Developed By{" "}
            <a target="_blank" href="aleehatech.com">
              AleehaTech
            </a>
          </p>

          <div className="flex gap-3">
            <a target="_balnk" href="facebook.com">
              <Image
                src={"https://i.ibb.co/WFpLDq4/facebook-app-symbol-min.png"}
                height={20}
                width={20}
                alt="fb"
              />
            </a>
            <a target="_balnk" href="facebook.com">
              <Image
                src={"https://i.ibb.co/Qr41Gcx/instagram-min.png"}
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
