import Drawer from "@/components/Drawer";
import "@/styles/globals.css";
// import {
//   Dela_Gothic_One,
//   Nunito,
//   Open_Sans,
//   Roboto,
//   Sora,
// } from "next/font/google";

// const getfont = Open_Sans({
//   subsets: ["latin"],
//   display: "fallback", // <--
// });

export const metadata = {
  title: "Rich Cotton Ltd. - A house of fashion garments sourcing",
  description: "A house of fashion garments sourcing",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body
      // className={getfont?.className}
      >
        <Drawer>{children}</Drawer>
      </body>
    </html>
  );
}
