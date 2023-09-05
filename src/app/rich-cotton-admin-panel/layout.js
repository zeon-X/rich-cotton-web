import Link from "next/link";

const layout = ({ children }) => {
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default layout;
