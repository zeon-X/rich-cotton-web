"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const layout = ({ children }) => {
  const router = useRouter();
  const [credentialsMatch, setCredentialsMatch] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Check for stored username and password in localStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Define the expected username and password
    const expectedUsername = "mdshefatzeon@gmail.com";
    const expectedPassword = "11223344";

    // Check if the stored credentials match the expected ones
    const credentialsMatch =
      storedUsername === expectedUsername &&
      storedPassword === expectedPassword;

    if (!credentialsMatch) {
      // If credentials do not match, redirect to the login page
      Swal.close();
      router.push("/rich-cotton-admin-panel-auth");
    } else {
      setLoading(false);
      Swal.close();
    }
  }, [router]);

  if (loading) return Swal.showLoading();

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-start justify-start p-6">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <main className="w-full">{children}</main>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60  border-r min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li className="mb-2">
              <Link href="/rich-cotton-admin-panel/products">Products</Link>
            </li>
            <li className="mb-2">
              <Link href="/rich-cotton-admin-panel/clients">Clients</Link>
            </li>
            <li className="mb-2">
              <Link href="/rich-cotton-admin-panel/team">Team Members</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default layout;
